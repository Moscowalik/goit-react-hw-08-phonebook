import React from 'react';
import { useDeleteContactMutation } from '../../redux/contactsSlice';
import PropTypes from 'prop-types';

import './ContactList.css';

const ContactListItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className="ContactListItem">
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className="ContactsList-button"
        onClick={() => deleteContact(id)}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

const ContactList = ({ filteredContacts }) => {
  return (
    filteredContacts && (
      <ul className="ContactsList">
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    )
  );
};

export default ContactList;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

ContactList.propTypes = {
  contacts: PropTypes.array,
};
