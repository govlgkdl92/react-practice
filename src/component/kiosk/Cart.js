import React from 'react';
import styled from "styled-components"

const CartDiv = styled.div`
    width: 30vw;
    height: 80vh;
    background-color: cornsilk;
  
  
`
const Cart = ({cartItem}) => {

    return (
        <CartDiv>
            <h3>카트</h3>
            <ul>
                {cartItem.map((item,i) => <li key={i}>{item.pname} -- {item.price}</li>)}
            </ul>
        </CartDiv>
    );
    //똑같은 상품이 들어오면 수량만 들어오게 / 총합 변경 가능하게

    //자바 스크립트의
};

export default Cart;