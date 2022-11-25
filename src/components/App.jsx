import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from 'redux/searchAPI';
import { selectIsLoading, selectError } from 'redux/contactsSlise';
import { Loader } from './Loader/Loader';
import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from './App.stiled';




const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Section>
      <Containet>
        <div>
          <H1>Phonebook</H1>
          <ContactForm />
        </div>

        <DivList>
          <h2>Contacts</h2>
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </DivList>
      </Containet>
    </Section>
  );
};
export default App;
