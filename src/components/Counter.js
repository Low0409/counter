import React, { useState,useEffect } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(10);
    useEffect(()=>{
        document.title=`you clicked${count}`
        // alert('ゆーずえふぇくと')
        const a = document.querySelector('#r')
        a.innerHTML +=`<h2>${count}</h2>`
        
    })
    const add = () => {
        setCount(count + 1)
    }
    const down = () => {
        setCount(count - 1)
    }
    return (
        <div className="container text-center mt-5">
            <div>
                {count}
                <br />
                <button className="btn btn-outline-primary" onClick={add}>増やす{props.title}</button>
                <button className="btn btn-outline-primary" onClick={down}>減らす</button>

            </div>
        </div>
    )
}

export default Counter