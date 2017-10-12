import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact, updateContact } from '../actionCreators';
import './contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  handleEdit = () => {
    this.setState(() => ({
      isEditing: true
    }));
  }

  handleDelete = () => {
    const { deleteContact, contact } = this.props;
    deleteContact(contact.id);
  }

  handleSave = () => {
    const validateCases = {
      name: [this.validateName, this.refs.name.value],
      age: [this.validateAge, +this.refs.age.value]
    };
    const requiredFileds = 2;
    let counter = 0;
    const { updateContact, contact } = this.props;

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
      let editedUser = {
        name: this.refs.name.value,
        age: +this.refs.age.value,
        gender: this.refs.gender.value,
        id: +contact.id
      };

      updateContact(editedUser, contact.id);

      this.setState({
        isEditing: !this.state.isEditing
      });
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

  handleCancel = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  }

  render() {
    const { contact } = this.props;
    const userName = this.state.isEditing ? <input ref="name" className="list-item" defaultValue={contact.name} /> : <div className="list-item">{contact.name}</div>;
    const userAge = this.state.isEditing ? <input ref="age" className="list-item" defaultValue={contact.age} /> : <div className="list-item">{contact.age}</div>;
    const userGender = this.state.isEditing ? <select ref="gender" className="list-item">
                                                <option defaultValue>Male</option>
                                                <option>Female</option>
                                              </select> : <div className="list-item">{contact.gender}</div>;
    return (
      <li className="list-item-wrapper">
        {userName}
        {userAge}
        {userGender}
        {this.state.isEditing ? <button className="btn btn-success" onClick={this.handleSave}>Save</button> : <button className="btn btn-success" onClick={this.handleEdit}>Edit</button>}
        {this.state.isEditing ? <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button> : <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>}
      </li>
    );
  }
}

// Contact.propTypes = {
//   contact: PropTypes.element
// };

export default connect(null, { deleteContact, updateContact })(Contact);
