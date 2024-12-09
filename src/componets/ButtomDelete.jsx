

const Person = ({ person, deletePerson }) => {
  const handleDelete = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
      deletePerson(person.id);
    }
  };

  return (
    <li>
      {person.name} {person.number}
      <button onClick={handleDelete}>delete</button>
    </li>
  );
};

export default Person;