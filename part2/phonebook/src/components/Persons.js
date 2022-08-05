const Persons = ({ name, number, id }) => (
  <p key={id}>
    {name} {number}
  </p>
);

export default Persons;
