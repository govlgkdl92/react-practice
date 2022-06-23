import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components"
import {getStoreList} from "../api/storeAPI";

const MapDiv = styled.div`
    
    width: 100vw;
    height: 30vh;
    background-color: khaki;
` // MapDiv 끝

const kakao = window.kakao


const MapEx = () => {

    const mapRef = useRef()
    const [stores, setStores] = useState([])
    const [map, setMap] = useState()

    console.log(".......MapEx.......", map)

    useEffect(() => {
        console.log(".......MapEx useEffect.........", mapRef.current)

        const mapOption = {
            center: new kakao.maps.LatLng(37.5703702 ,126.9850312), // 지도의 중심좌표
            level: 5 // 지도의 확대 레벨
        }

        //map 초기화
        const map = new kakao.maps.Map(mapRef.current, mapOption);
        map.markers = []

        setMap(map)

        getStoreList().then(data => {
            console.log(data)
            setStores(data)
        })

    },[])

    useEffect(() => {
        console.log("useEffect...by stores")
        makeMarkers()
    },[stores])

    const makeMarkers = () => {
        for (let i = 0; i <stores.length; i++) {
            const {id, lat, lng, sname} = stores[i]
            console.log(id, lat, lng, sname)

            // 마커가 표시될 위치입니다
            const markerPosition  = new kakao.maps.LatLng(lat, lng);

            // 마커를 생성합니다
            const marker = new kakao.maps.Marker({
                position: markerPosition
            });

            marker.setMap(map)
            map.markers.push(marker)
        }//end for
    }

    function clearAll(){
        let marker
        while(marker = map.markers.pop(0)){ //이때 나오는 값이 true & false
            marker.setMap(null)
        }
    }

    return ( // ref={mapRef}
        <>
            <MapDiv ref={mapRef}>
            </MapDiv>
            <br/>
            <button onClick={clearAll}>clear All</button>
        </>

    );
};

export default MapEx;