import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './contact/Contact';
import './contactList.css';

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { contacts } = this.props;
    const contactList = contacts.map(contact =>
      <Contact key={contact.id} contact={contact} />
    );
    return (
      <ul className="list-wrapper">
        {contactList}
      </ul>
    );
  }
}

const mapStateToProps = (contacts) => {
  return contacts;
};

export default connect(mapStateToProps)(ContactList);
