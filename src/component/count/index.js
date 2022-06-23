import React, {createContext, useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButtons from "./CountButtons";

export const CountContext = createContext()

const Count = () => {

    const [num, setNum] = useState(10)

    const changeNum = (value) => {
        setNum(num + value)
    }

    return (
        // 얘네들이 하나의 컨텍스트로 묶인 것. num:num 생략해서 그냥 num 라고 해도 상관 없다.
        <CountContext.Provider value={{num, changeNum}}>
            <div>
                <CountDisplay></CountDisplay>
                <CountButtons></CountButtons>
            </div>
        </CountContext.Provider>
    );
};

export default Count;