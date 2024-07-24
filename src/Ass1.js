import React from 'react';
import Ten from './Ten';

function Card(props) {
  const width = 100;
  return (
    <div className="card" style={{ width: '250px', margin: '10px' ,marginLeft:'20px',marginRight:'20px',padding: '100px',textAlign:"center"}} >
      <img
        src="/prof.png"
        alt=""
        width={width}
        style={{ border: '1px solid pink', borderRadius: '50px' ,display: 'block', 
            margin: '0 auto'}}
      />
      <div className="card-body">
        <h2>{props.userFromArray}</h2>
        <h3>{props.user.branch}</h3>
        <h3>{props.user.year}</h3>
        <Ten />
      </div>
    </div>
  );
}

export default Card;
