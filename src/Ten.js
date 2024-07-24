import { useEffect, useState } from "react";


function Ten(){
    const [count,setCount] = useState(0);
    useEffect(() => {
        console.log("Use effect is called");
    },[]);

    function Increment(){
        setCount(count+1);
    }

    function Decrement(){
        setCount(count - 1);
    }

    return (
        // style={{marginTop:'30px',marginLeft:'30px'}}
        <div style={{marginLeft:'10px'}}>
            {count === 0 ? <button style={{ fontSize: '20px' }} className="btn btn-success" onClick={Increment}>Add to cart</button> : <div style = {{display : 'flex'}}>
            <button className="btn btn-secondary" onClick={Increment} style ={{width : '50px'}}>+</button>
            <h1 style={{marginRight :'15px', marginLeft : '15px'}}>{count} </h1>
            <button className="btn btn-secondary" onClick={Decrement} style ={{width : '50px'}}>-</button>
            </div> }
        </div>
    )
}

export default Ten;