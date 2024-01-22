// import css from './MyContacts.module.css';
import { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';

class MyContacts extends Component {
  state = {
    contacts: [
      {
        name: 'Kostiantyn',
        number: '1215515',
      },
    ],
  };

  addContact = data => {
    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  render() {
    const { contacts } = this.state;
    const { addContact } = this;
    return (
      <div>
        <PhonebookForm onSubmit={addContact} />
        <ContactsList items={contacts} />
      </div>
    );
  }
}

export default MyContacts;
