import { useEffect, useRef, useState } from "react";

function Form(){
    const collegeIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [message,Setmessage]  = useState('');
    const formsubmitted = (event) => {
        event.preventDefault();
        if(collegeIdRef.current.value === passwordRef.current.value){
            Setmessage("Correct");
        }else{
            Setmessage("Incorrect");
        }
    }
    useEffect(() => {
        collegeIdRef.current.focus();
    });
    return(
        <div className="d-flex justify-content-center align-items-center " style={{ height: '100vh'}}>

        <div className="card" style={{width:'300px',padding:'20px'}}>
            <h5 class="card-title">Login</h5>
            <p class="card-text">Provide your details to login</p>
            {/* <div className="flex-grow-1">     */}
            <form onSubmit={formsubmitted} style={{display:"flex",flexDirection:'column',gap:'10px'}}>
            <div class="mb-3"> 
            <label for="inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>College Id</label><br />
            <input type="text" className="form-control" ref={collegeIdRef} placeholder="College Id"/>
            </div>
            <div class="mb-4">
                <label for="inputPassword5" class="form-label" style={{fontWeight:"bolder"}}>Password</label><br />
                <input type="password" className="form-control" ref={passwordRef} placeholder="Password"/>
            </div>
                <div>
                <button type="submit" className="btn btn-dark">Login</button>
                <p>{message}</p>
                </div>
            </form>
            {/* </div> */}
        </div>
        </div>
    )
}

export default Form;



// div class="mb-1">
//             <h5 class="card-title">Login</h5>
//             <p class="card-text">Provide your details to login</p>
//             </div>
//             <div class="mb-3">
//             <label for="exampleFormControlInput1" class="form-label">Email address</label>
//             <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="College Id"></input>
//             </div>
//             <div class="mb-3">
//             <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
//             <input class="form-control" id="exampleFormControlTextarea1" placeholder="Password"></input>
//             </div>