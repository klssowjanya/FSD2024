import React, { useState } from "react";
import AddReview from "./AddReview";

function Eleven2() {
  const [text, setText] = useState("");
  const [reviews] = useState([]); 

  const addReview = () => {
    reviews.push(text);
    setText("");   
  };

  const inputValueChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
        <div>
        <h1 marginBottom = "50px" style = {{padding:"10px"}}> Reviews </h1> 
        </div>
    
    <div style={{padding:"10px 20px", display :"flex"}}>
    
      <input
        type="text"
        placeholder="Enter a review"
        onChange={inputValueChange}
        // value={text}
        style={{width: "1500px",height: "100px",alignItems:"center"}}
      /> 
      <button className="btn btn-primary btn-md" onClick={addReview} style ={{marginLeft:"20px",width:"300px",height:"100px"}}>
        Add Button
      </button>
      </div>
      {/* {reviews.map((review, index) => (
        <div key={index}>{review}</div>
      ))} */}

      <AddReview r ={reviews}/>
    
    </div>
  );
}

export default Eleven2;