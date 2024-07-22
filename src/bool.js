function Bool(){
    let ans = true;
    return (
        <div>
             {/* conditional rendering 
                'This is true'*/}
            {ans ? <h1>True</h1> : <h1>False</h1>}
        </div>
    )
}
export default Bool;