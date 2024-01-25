import css from './PhonebookForm.module.css';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
  filter: '',
};

class PhonebookForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: name === 'number' ? this.formatPhoneNumber(value) : value,
    });
  };
  formatPhoneNumber = input => {
    return input
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d{2})(\d{2})/, '$1-$2-$3');
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className={css.wrapp}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={this.handleChange}
            id="name"
            placeholder="Please enter name"
            type="text"
            name="name"
            required
          />
        </div>
        <div className={css.wrapp}>
          <label htmlFor="number">Number</label>
          <input
            value={number}
            onChange={this.handleChange}
            id="number"
            placeholder="123-45-67"
            type="tel"
            name="number"
            required
            maxLength="7"
            pattern="\d{3}-\d{2}-\d{2}"
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhonebookForm;
