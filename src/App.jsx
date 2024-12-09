import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [Country, setCountry] = useState([])
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    console.log('conexion')
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    .then(response => {   
      console.log('promise fulfilled')  
      setCountry(response.data)
        .catch (error => {
          console.log('error', error)
        })

      })
  }, [])
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)

  }
  const filterCountry =
   Country.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  


  return(
    <div>
      <h1>Countries</h1>
      <input 
      type="text" 
      value={filter}
       onChange={handleFilterChange}
        placeholder='Busca un pais'
        />

      <ul>
        {filterCountry.map(country => (
          <li key={country.cca3}>
          Name:  {country.name.common} <br />
          Capital:  {country.capital} <br />
          Flag:  <img src={country.flags.png} alt={country.name.common} width='100px' /> <br />   
           Population:  {country.population} <br />
          </li>

        ))}

        
      </ul>
      
      
    </div>
  )
}
export default App
