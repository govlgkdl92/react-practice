import React, {useRef} from 'react';

const jquery = window.jQuery //이것만 넣으면 jquery 사용 가능

const Ex1 = () => {

    console.log(jquery)

    const target = useRef()

    const clickHide = () => {
        //
        //const ele = target.current
        const ele = jquery(target.current)
        //const ele = jquery(".sample")
        ele.hide('slow')
        console.log(ele)
    }

    const clickShow = () => {
        const ele = jquery(target.current)
        ele.show('slow')
    }

    return (
        <div>
            <h3 ref={target} className={"Sample"}>Ex1</h3>
            <div>
                <button onClick={() => clickHide()}>HIDE</button>
                <button onClick={() => clickShow()}>SHOW</button>
            </div>
            <br/>
        </div>
    );
};

export default Ex1;