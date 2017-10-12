import { defaultContacts } from './mockUsers';
debugger
export default (contacts = defaultContacts, action ) => {

  const { type, payload } = action;
  switch (type) {
    case 'LOAD_ALL_CONTACTS':
      return contacts;

    case 'DELETE_CONTACT':
      return contacts.filter(contact => contact.id !== payload.id);

    case 'ADD_CONTACT':
      const tempContacts = [].concat(contacts);
      tempContacts.push(payload.data);
      return tempContacts;

    case 'UPDATE_CONTACT':
      const index = contacts.findIndex(c => c.id === payload.id);
      const newContacts = [].concat(contacts);
      newContacts[index] = payload.data;
      return newContacts;
  }
  return contacts;
};
