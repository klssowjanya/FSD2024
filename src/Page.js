import AddReview from "./AddReview";
import Reviews from "./Review_image";
import Eleven2 from "./ReviewList";
import Ten from "./Ten";

function Page(){
    return (
        <div>
        <h1 style = {{padding:"10px"}}> Product Name</h1>
        <div class="card" style = {{marginLeft:"10px",marginRight:"20px"}}>
            
            <div class="card">
                
                <div className = "card-body" style={{display:"flex"}}>
                    <img src = "/prof.png" width="300px" height="300px" alt="">
                    </img>
                    <p style={{ marginLeft: "30px" }}>
                        <h2>Product Name</h2>
                        <h4 style={{ marginLeft : "20px" ,marginBottom: "80px" }} >Description Description Description Description Description Description Description</h4>
                        <h1>&#8377; 500.00 </h1>
                        <Ten/>
                    </p>
                </div>
            </div>
            <div class= "card">
                    <h1 style = {{padding:"10px"}}>Product Specifications</h1>
                    <p style={{ marginLeft:"10px" , marginBottom: "80px"}}>Description Description Description Description Description Description Description</p>
            </div>
            <div class="card" marginBottom="500px">
                <Eleven2/>
            </div>
            
        </div>
        </div>
    )
}
export default Page;