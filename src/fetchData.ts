export const getContacts = async () => {
  const response = await fetch(
    'https://s3.amazonaws.com/technical-challenge/v3/contacts.json',
  );
  const listOfContacts = await response.json();
  return listOfContacts;
};
