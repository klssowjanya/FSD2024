import { useEffect, useState } from "react";


function Nine(){
    //const Count =0;
    const [count,setCount] = useState(1);
    useEffect(() => {
        setCount(5);
        console.log("Use effect is called");
    }, []); //2 parameters 2nd - dependency array - to indicate when to call to avoid calling everytime

    const handleIncrement = () => {
        setCount(count+1);
    }

    return (
        <div>
            <div> Count {count} </div>
            <button className="btn btn-dark" onClick={handleIncrement}>Click Here</button>

        </div>
    )
}

export default Nine;