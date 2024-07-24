import {useState} from "react";

function Eleven(){
    const [inputValue,SetInputValue] = useState("");
    const [review,SetReview] = useState("");

    const inputValueChange = (event) => {
        SetInputValue(event.target.value);
        console.log("Input Changed");
        console.log(event.target.value);
    }

    const addReview = () => {
        SetReview(inputValue);
        console.log("Adding Review....");
    }
    return ( 
        <div>
    <input type = "text" size = '40' placeholder= "Enter a review" onChange={inputValueChange}></input>
    <button className="btn btn-primary" onClick={addReview}>Add Review</button>
    <p>{review}</p>
    </div>
    );
}

export default Eleven;