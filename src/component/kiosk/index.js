import React, {useState} from 'react';
import ProductList from "./productList";
import Cart from "./Cart";
import styled from "styled-components"

const KioskDiv = styled.div`
    display: flex;
  
`

const Kiosk = () => {

    const [cartItem, setCartItem] = useState([])

    const addCart = (product) => {
        setCartItem([...cartItem, product])
    }

    return (
        <KioskDiv>
            <ProductList addcart={addCart}></ProductList>
            <Cart cartItem={cartItem}></Cart>
        </KioskDiv>
    );
};

export default Kiosk;