import React, {useEffect, useState} from 'react';
import styled from "styled-components"
import axios from "axios";

const ProductDiv = styled.div`
    width: 70vw;
    background-color: khaki;
`

const ProductUL = styled.ul`
    display: flex;
    list-style: none;
    flex-wrap:wrap;
`

const ProductImg = styled.img`
    width: 10vw;
    flex:none;
    padding : 10px;
`

const ProductLi = styled.div`
    width: 15vw;
    align-content: center;
    justify-content: center;
    border: 1px solid darkgreen;
    margin : 10px;
    border-radius: 10px;
`

const ProductInfo = styled.div`

`


const ProductList = ({addcart}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        axios.get("http://localhost/products/").then(res => {
            setProducts(res.data)
        })
    },[])

    const list = products.map(p => <ProductLi key={p.id}>
        <ProductImg src={require(`../../assets/img/${p.id}.jpg`)} />
        <h4 onClick={() => clickAdd(p)}>{p.pname}</h4>
        <h5>{p.price}</h5>
    </ProductLi>)

    const clickAdd = (p) => {
        addcart(p)
    }

    return (
        <ProductDiv>
            <h3>상품 리스트</h3>
            <ProductUL>
                {list}
            </ProductUL>
        </ProductDiv>
    );
};

export default ProductList;