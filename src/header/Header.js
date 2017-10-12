import React, { Component } from 'react';
import CreateContact from '../createContact/CreateContact';
import './header.css';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateOpen: false
    };
  }

  handleToggle = () => {
    this.setState(() => ({
      isCreateOpen: !this.state.isCreateOpen
    }));
  }

  render() {
    const createModal = this.state.isCreateOpen ? <CreateContact onToggle={this.handleToggle} /> : null;
    return (
      <div className="header text-center">
        <h1 className="header__title">Test Task Starter</h1>
        <button className="header__button btn btn-success" onClick={this.handleToggle}>Create contact</button>
        {createModal}
      </div>
    );
  }
}
