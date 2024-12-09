

const AllPerson = ({persons}) => {    
    return (
        <div>
            <h1>All Person</h1>
           <ul>
            {persons.map((person) => (
                <li key={person.id}> {person.name } </li> 
            ))}    
                   
                   
             </ul>
        </div>
    );
}  
export default AllPerson; 