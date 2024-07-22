function Review(){
    const list = [['sowji','good'],['nikki','great'],['harika','nice']];
    return (
        <div>
            <h1>Product Name</h1>
            {list.map(([reviewer,review],index) => (
                    <div key={index} style = {{marginBottom : '30px'}}>
                        <h2>{reviewer}</h2>
                        <p>{review}</p> 
                    </div>
                ))
            }
        </div>
    );

    
}

export default Review;