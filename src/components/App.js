import {useEffect, useState} from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './App.css';


const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

 function App () {
  const [contacts, setContact] = useState(initialContacts)
  console.log(contacts)
  const [filter, setFilter] = useState('')
  
  useEffect(() => {
    if (localStorage.getItem('contacts')?.length > 0) {
      setContact(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact =  newContact => {
    const contactCheck = contacts.find(({ name }) => name === newContact.name);

    if (contactCheck !== undefined) {
      alert(`${newContact.name} is already in contact`);
      return;
    }

    setContact(prevContact => [...prevContact, newContact]);
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase()),
  );

  const removeContact = id => {
    setContact(contacts.filter(contact => contact.id !== id));
  };
  return (
          <>
            <div className="Container">
              <section title="Phonebook" className="Section">
                <h1>Phonebook</h1>
                <ContactForm  addContact = {addContact}/>
              </section>
              <section title="Contacts" className="Section">
                <h2>Contacts</h2>
                <Filter value={filter} onChangeFilter={e => setFilter(e.target.value)} />
                <ContactList
                  filteredContacts={filteredContacts}
                  onRemove={removeContact}
                />
              </section>
            </div>
          </>
        );
}


export default App