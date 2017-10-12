export function loadAllContacts() {
  return {
    type: 'LOAD_ALL_CONTACTS'
  };
}

export function deleteContact(id) {
  return {
    type: 'DELETE_CONTACT',
    payload: { id }
  };
}

export function updateContact(data, id) {
  return {
    type: 'UPDATE_CONTACT',
    payload: { data, id }
  };
}
