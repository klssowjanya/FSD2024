import { useState } from "react";
import Form from "./Login_Page";
import Register from "./Register";

function Thirteen(){
    const [isLogin,setIsLogin] =useState(true);
    return(
        <div>
            <button onClick={()=> {setIsLogin(true)}}>Login</button> 
            {/* // write above showLogin function */}
            <button onClick={()=> {setIsLogin(false)}}>Register</button> 
            {/* // write above show register function */}

            {isLogin?
            <Form /> :
                <Register />
            }
        </div>
    )
}

export default Thirteen;