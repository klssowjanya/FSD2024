import { useState } from "react";
import Form from "./Login_Page";
import Register from "./Register";

function Navbar(){
    const [isLogin,setIsLogin] =useState(true);
    return (
        <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link login" aria-current="page" href="#Login" onClick = {() => {setIsLogin(true)}}>Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#Register" onClick={()=> {setIsLogin(false)}}>Register</a>
            </li>
            
        </ul>

        { 
            isLogin ?
            <Form /> :
                <Register />
        }
        </div>
    )
}

export default Navbar;