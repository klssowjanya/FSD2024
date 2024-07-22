function PrintArray(){
    const Array = ['Amma','Nanna','Akka','PetDog','Myself']
    return (
        <div>
            <ul>
                {
                Array.map(item => (<li>{item}</li>))
            }
            </ul>
        </div>
    )
}
export default PrintArray;

// branches = ['AI','CSE','IT','DS']
//branchList = branches.map((branch,index) => <li key = {index}> {branch}</li>)
//<div> 
//  <h1> List of branches</h1>
//  <h2>{branchList}</h2>