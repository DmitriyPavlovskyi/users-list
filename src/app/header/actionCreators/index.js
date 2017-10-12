export function addContact(data) {
  return {
    type: 'ADD_CONTACT',
    payload: { data }
  };
}
