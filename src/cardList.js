import Card from "./Card";

function CardListUI(){
    const name123 = "React";
    const college = "SVECW";
    const userObject = {name:"Sowji",branch:"AIML",year:"3"};
    const users = ["Sowji","Alee","Sai","Devi","Rama"]
    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
           { users.map((user1,index) => (<Card key={index} 
                // program={name123} 
                // col={college} 
                user={userObject}
                userFromArray = {user1}/>))

            
            // <Card program={name} col={college} user={userObject}/>
            /* <Card program = {name}/> */
            }   
        </div>
    )
}
export default CardListUI;