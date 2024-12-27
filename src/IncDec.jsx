import React, { useEffect, useState } from "react";

const IncDec = () =>{
    const [count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    }

    const decrement = () =>{
        setCount(count - 1);
    }

    useEffect(()=>{
        console.log("Counter Mounted");
    }, []);

    return(
        <>
            <h1>Counter Using useState</h1>
            <h3>{count}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
};

export default IncDec;