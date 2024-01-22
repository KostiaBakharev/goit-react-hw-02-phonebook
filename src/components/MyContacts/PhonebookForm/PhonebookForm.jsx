import css from './PhonebookForm.module.css';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class PhonebookForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
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
            placeholder="Name"
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
            placeholder="Number"
            type="tel"
            name="number"
            required
          />
        </div>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default PhonebookForm;
