import React, {useContext} from 'react';
import {CountContext} from "./index";

const CountDisplay = () => {

    const {num} = useContext(CountContext)

   /* 함수 자체를 금고에 보관해도 상관업성요... */
    return (
        <div>
            <h3>COUNT</h3> <h2>{num}</h2>
        </div>
    );
};

export default CountDisplay;