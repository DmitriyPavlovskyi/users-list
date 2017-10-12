import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actionCreators';
import './createContact.css';

class CreateContact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleCreate = () => {
    const { addContact } = this.props;
    const validateCases = {
      name: [this.validateName, this.refs.name.value],
      age: [this.validateAge, +this.refs.age.value]
    };
    const requiredFileds = 2;
    let counter = 0;

    for (let key in validateCases) {
      const validator = validateCases[key][0];
      const value = validateCases[key][1];

      if (!validator(value)) {
        this.refs[key].style.border = '1px solid #ef7272';
      } else {
        this.refs[key].style.border = '1px solid #ccc';
        counter++;
      }
    }

    if (counter === requiredFileds) {
      const newUser = {
        name: this.refs.name.value,
        age: +this.refs.age.value,
        gender: this.refs.gender.value,
        id: (new Date()).getTime()
      };

      this.props.onToggle();

      addContact(newUser);
    }
  }

  validateAge = (value) => {
    const template = /^(?:1(?:00?|\d)|[2-9]\d)$/;

    return template.test(value);
  }

  validateName = (value) => {
    const template = /^[A-z]{4,20}$/;

    return template.test(value);
  }

  render() {
    return (
      <div className="create-wrapper">
        <input ref="name" placeholder="Enter name" />
        <input ref="age" placeholder="Enter age" />
        <select ref="gender">
          <option defaultValue>Male</option>
          <option>Female</option>
        </select>

        <div>
          <button className="btn btn-success" onClick={this.handleCreate}>Create</button>
          <button className="btn btn-danger" onClick={this.props.onToggle}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default connect(null, { addContact })(CreateContact);
