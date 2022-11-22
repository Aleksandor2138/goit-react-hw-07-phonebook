import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import {
  deleteContacts,
  getItem,
} from '../../../redux/contactsSlise';
import { getFilter } from 'redux/filterSlise.js';
import { NameContacts, List, Elements, Button } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);
  const delContacts = event => {
    dispatch(deleteContacts(event.target.name));
  };
  const contactFilter = () => {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const filterOne = contactFilter();
  const list = filterOne ? filterOne : contacts;
  return (
    <List>
      {list.map(({ id, name, number }) => (
        <Elements key={id}>
          <NameContacts>
            {name}: {number}
          </NameContacts>
          <Button type="button" name={id} onClick={delContacts}>
            Delete
          </Button>
        </Elements>
      ))}
    </List>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   deleteContacts: PropTypes.func.isRequired,
// };

export default ContactList;
