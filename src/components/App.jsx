// import React, { useState, useEffect } from 'react';
import { Filter } from './Phonebook/Filter/Filter';
import ContactForm from './Phonebook/ContactForm/ContactForm';
import ContactList from './Phonebook/ContactList/ContactList';
import { Section, Containet, H1, DivList } from './App.stiled';



const App = () => {
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
          <ContactList/>
        </DivList>
      </Containet>
    </Section>
  );
};
export default App;
