import css from './ContactsList.module.css';

const ContactsList = ({ items, onDelete }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number} <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default ContactsList;
