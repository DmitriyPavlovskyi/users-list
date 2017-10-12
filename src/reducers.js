const defaultContacts = [
  {
    name: 'John',
    age: 28,
    gender: 'male',
    id: 1
  },
  {
    name: 'Mark',
    age: 35,
    gender: 'male',
    id: 2
  },
  {
    name: 'Lisa',
    age: 24,
    gender: 'female',
    id: 3
  },
  {
    name: 'Helen',
    age: 29,
    gender: 'female',
    id: 4
  }
];

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
