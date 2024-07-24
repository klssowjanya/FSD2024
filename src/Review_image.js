import React from 'react';
import stylie from './stylie.jpg'; // Adjust the path based on the actual location of the image

function Reviews() {
    const reviewsDict = {
        'Sowji': {
            feed: 'The product is very good',
            img: stylie
        },
        'Alee': {
            feed: 'Product has less quality',
            img: stylie
        }
    };

    return (
        <>
            <h1 style = {{padding:"10px",marginBottom : "50px" }}>Reviews</h1>
            {Object.entries(reviewsDict).map(([name, { feed, img }], index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                        <img 
                            src={img} 
                            alt={`${name}`} 
                            style={{ 
                                width: '50px', 
                                height: '50px', 
                                borderRadius: '50%', 
                                marginLeft: '10px' 
                            }} 
                        />
                        <h2 style={{ margin: 0 , marginLeft:"10px"}}>{name}</h2>
                    </div>
                    <h3 marginBottom="30px" style={{ marginLeft:"70px" }}>{feed}</h3>
                </div>
            ))}
        </>
    );
}

export default Reviews;
