const FormaddPerson = ({ addPerson, newName, handleNumberChange, handlePersonChange, newNumber }) => {
    return (
        <form onSubmit={addPerson}>
        <h2>Add a new name </h2>
       <div>
         name: <input  type="text "value={newName} onChange={handlePersonChange}  />
       </div>
       <div>
         number: <input type="number "value={newNumber} onChange={handleNumberChange}  />
       </div>

       <div>
         
         <button  type="submit" >add</button>
         
       </div>
     </form>
    )
};

export default FormaddPerson;