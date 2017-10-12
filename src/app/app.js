import React from 'react';
import Header from './header/Header';
import ContactList from './contactList/ContactList';
import './app.css';

const App = () => (
  <div className="main-wrapper">
    <Header />
    <ContactList />
  </div>
);

export default App;
