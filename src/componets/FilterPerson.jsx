

const FilterPerson = ({ persons, newFilter, deletePerson}) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())
);
    return (
       <ul>
        {filteredPersons.map(person => 
            <li key={person.id}>{person.name} {person.number} <button onClick={() => deletePerson(person.id)}>Delete </button></li>
        )}
       </ul>
    )
    }   
    export default FilterPerson;