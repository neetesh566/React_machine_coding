import {useState} from "react";

const CounterApp =()=>{
    const [count,setcount] =useState(0);

    const handleincrease=()=>{
        setcount(count+1);
    };

    const handledecrease=()=>{
        if(count>0){
            setcount(count-1);
        }
    };

    const handlereset=()=>{
        setcount(0);
    }

    return (
        <div classname="counter">
            <h1>Counter App</h1>

            <h2>{count}</h2>

            <div classname ="button">
                <button classname="btnincrese" onClick={handleincrease}>
                    Increment
                    </button>
                    <button classname="btndecrese" onClick={handledecrease}>
                        Decrement
                    </button>
                    <button classname="btnreset" onClick={handlereset}>
                        Reset
                    </button>
                </div>
            </div>
    );
};

export default CounterApp;