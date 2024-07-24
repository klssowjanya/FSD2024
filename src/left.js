// Reviewer data
const reviewers = [
    {
      name: "ANU",
      feedback: "React concept is crystal clear. Thank You.",
      photo: "stylie.jpg" // Replace with the actual path to the photo
    },
    {
      name: "LOHI",
      feedback: "React concept is crystal clear. Thank You.",
      photo: "Stylr.jpg" // Replace with the actual path to the photo
    }
  ];
  
  function Reviewer() {
    return (
      <div>
        <h1>REVIEWER</h1>
        {reviewers.map((reviewer, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img 
                src={reviewer.photo} 
                alt={reviewer.name} 
                style={{ 
                  width: '50px', 
                  height: '50px', 
                  marginRight: '10px', 
                  borderRadius: '50%' // Makes the image rounded
                }} 
              />
              <h2 style={{ margin: 0 }}>{reviewer.name}</h2>
            </div>
            <h3 style={{ margin: '0 0 0 60px' }}>{reviewer.feedback}</h3>
          </div>
        ))}
      </div>
    );
  }
  
  export default Reviewer;