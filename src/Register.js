import { useState } from "react";

function Register(){
    const [collegeId,setCollegeId] = useState('');
    const getCollegeId = (event) =>{
        setCollegeId(event.target.value)
        console.log(collegeId);
    }
    const [password,setPassword] = useState('');
    const getPassword = (event) => {
        setPassword(event.target.value)
        console.log(password)
    }
    const [email,setEmail] = useState('');
    const getEmail = (event) => {
        setEmail(event.target.value)
        console.log(email)
    }
    const [branch,setBranch] = useState('');
    const getBranch = (event) => {
        setBranch(event.target.value)
        console.log(branch)
    }
    const [year,setYear] = useState('');
    const getYear = (event) => {
        setYear(event.target.value)
        console.log(year)
    }
    const [sex,setSex] = useState('Female');

    const [msg,setMsg]  = useState('');
    const formsubmitted = (event) => {
        event.preventDefault();
        if(collegeId === '' || password==='' || email === '' || branch==='' || year==='' || sex==='' ){
            setMsg("InCorrect");
        }else{
            setMsg("Correct");
        }
    }

    const submitData = (event) => {
        event.preventDefault();
        const obj = {
            collegeId,password,email,branch,year,sex
        }
        setUser(obj);
        console.log(obj);
        console.log(user);
    }

    const [user,setUser] = useState('');
    return(

        <div className="d-flex justify-content-center align-items-center " style={{ height: '100vh'}}>
            
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Register</h5>
                    <p className="card-text">Provide your details to login</p>
                    <form onSubmit={submitData}>
                        <div className="mb-3"> 
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>College Id</label><br />
                        <input type="text" className="form-control"  placeholder="College Id" onChange={getCollegeId}/>
                        </div>
                        <div className="mb-3"> 
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>Password</label><br />
                        <input type="password" className="form-control"  placeholder="Password" onChange={getPassword}/>
                        </div>
                        <div className="mb-3"> 
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>Email</label><br />
                        <input type="email" className="form-control"  placeholder="Email" onChange={getEmail}/>
                        </div>
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>Branch</label><br />
                        <select className="form-select" aria-label="Default select example" onChange={getBranch}>
                            <option value="">Select a branch</option>
                            <option value="AIML">AIML</option>
                            <option value="AIDS">AIDS</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="EEE">EEE</option>
                            <option value="ECE">ECE</option>
                        </select>
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>Year</label><br />
                        <select className = "form-select" aria-label="Default select example" onChange={getYear}>
                            <option value="">Select a year</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                        <label htmlFor = "inputPassword5" className="form-label" style={{fontWeight:"bolder"}}>Gender</label><br />
                            <div className = "form-check form-check-inline" >
                            <input className = "form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" onChange={() => {setSex(sex)}}/>
                            <label className = "form-check-label" htmlFor = "inlineRadio1">Male</label>
                            </div>
                            <div className = "form-check form-check-inline">
                            <input className = "form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" onChange={() => {setSex(sex)}}/>
                            <label className = "form-check-label" htmlFor = "inlineRadio2">Female</label>
                            </div>
                            <div className = "form-check form-check-inline">
                            <input className = "form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Other" onChange={() => {setSex(sex)}}/>
                            <label className = "form-check-label" htmlFor = "inlineRadio3">Other</label>
                            </div>
                        <br /><br />
                        <button type="submit" className="btn btn-dark btn-md float-end">Login</button>
                        <p>{msg}</p>
                    </form>
                </div>
            
            </div>
           
        </div>
    )
}

export default Register;