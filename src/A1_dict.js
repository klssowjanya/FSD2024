function Dict(){
    const dict = { "Sowji":"The product is very good","Alekhya":"Product has less quality","Devi":"Cost is affordable","Nagababu":"Good quality"};
    return (
        <>
            <h1>Review</h1>
            <ul>
                {Object.entries(dict).map(([Reviewer_name,feed],index) => (
                    <li key = {index} style={{ marginBottom: '20px' }}>
                        <strong>{Reviewer_name}</strong>
                        <br />
                        {feed}
                        <br /><br />
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Dict;
