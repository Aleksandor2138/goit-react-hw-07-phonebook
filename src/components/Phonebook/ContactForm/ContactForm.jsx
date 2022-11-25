import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { selectItem } from 'redux/contactsSlise';
import {addContact} from 'redux/searchAPI'
import { Span, Input, Button, Form } from './ContactForm.styled';

const BASE_STATE = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [{ name, number }, setState] = useState(BASE_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(selectItem);

  function onChange(eve) {
    const { name, value } = eve.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    if (contacts.some(x => x.name === newContact.name)) {
      alert(`${newContact.name} is already is contacts`);
      return;
    }
    dispatch(addContact(newContact));
    setState({ ...BASE_STATE });
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="name">
        <Span>Name</Span>
        <Input
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Rosie Simpson"
        />
      </label>

      <label htmlFor="number">
        <Span>Number</Span>
        <Input
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="645-17-79"
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
