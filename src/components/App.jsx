import { Component } from 'react';
import MyContacts from './MyContacts/MyContacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  render() {
    return <MyContacts />;
  }
}
