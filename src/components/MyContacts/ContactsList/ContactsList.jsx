// import css from './ContactsList.module.css';

const ContactsList = ({ items }) => {
  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
    </li>
  ));
  return <ul>{elements}</ul>;
};
export default ContactsList;
