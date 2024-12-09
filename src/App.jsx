import { useState, useEffect } from 'react'
import FilterPerson from './componets/FilterPerson'
import FormaddPerson from './componets/FormaddPerson'
import AllPerson from './componets/AllPerson'
import Services from './componets/Services'



const App = () => {
  const [persons, setPersons] = useState([])
  
  useEffect(() => {
    console.log('conexion')
    Services.getAll()
    .then(response => {   
      console.log('promise fulfilled')  
      setPersons(response.data)
      })
  }, [])
  
  const [newNumber, setNumber] = useState('')
  const [newName, setNewName] = useState('')
  const [newFilter, setFilter] = useState('')
  const [Message, setMessage] =  useState(null)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        
    Services.update(existingPerson.id, { ...existingPerson, number: newNumber })
    .then(response => {
      setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
      setNewName('');
      setNumber('');
      setMessage(`Added ${newName} a phonebook` )   
      setTimeout(() => {
        setMessage (null)
      }, 1000)
    } 
    ).catch (error =>{
        setMessage(`Information of ${newName} has already been removed from server` )
        setTimeout(() => {
          setMessage (null)
        }, 1000)
        setPersons(persons.filter(person => person.id !== existingPerson.id))
    })
   }
  }else{
    const Person ={
      name: newName,
      number: newNumber
    }

    Services.create(Person)
    .then(response => { 
      console.log('promise fulfilled')  
      setPersons(persons.concat(response.data))
      setNewName('');
      setNumber('');
      setMessage(`Added ${newName} a phonebook` )   
      setTimeout(() => {
        setMessage (null)
      }, 1000)
      
    } )


  
  }
};
  
const NotificationaddPerson = ({Message}) => {
  if (Message === null) {
    return null
  }
  else{
    return (
      <div className="error">
        {Message}
      </div>
    )
  }
}
  


  const deletePerson = (id) => {
    if (window.confirm('Do you want to delete?')) {
      Services.Delete(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        alert(`the person was already deleted from server`)
       
      });
    }
  };
  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
    // Repeatperson(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNumber(event.target.value)
   
  }
  const handleFilterChange = (event) => { 
    console.log(event.target.value)
    setFilter(event.target.value)
  }

  
 
  // const Repeatperson = (newName) => {
  //   persons.find(person => person.name === newName) 
  //     ? alert(`${newName}  is already added to phonebook`) 
  //    : addPerson()

  // };


  return (
    <div>
      <h1>Phonebook </h1>
      <NotificationaddPerson Message={Message} />
      <div>
        filter shown with <input value={newFilter} onChange={handleFilterChange} />
      </div>
      
     
      <FormaddPerson addPerson={addPerson} newName={newName} handleNumberChange={handleNumberChange} handlePersonChange={handlePersonChange} newNumber={newNumber} />
      <h2>Numbers</h2>
      
      
      <ul>
       <FilterPerson persons={persons} newFilter={newFilter} deletePerson={deletePerson} /> 
      </ul>
      

      <AllPerson persons={persons} /> 
    </div>
  )
}

export default App