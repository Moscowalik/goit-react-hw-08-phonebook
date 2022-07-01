import { useState } from 'react';
import { useGetContactsQuery } from '../redux/contactsSlice';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import './App.css';

function App() {
  const [filter, setFilter] = useState('');
  const { data } = useGetContactsQuery();
  console.log(useGetContactsQuery());

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts =
    data &&
    data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      <div className="Container">
        <section title="Phonebook" className="Section">
          <h1>Phonebook</h1>
          <ContactForm contacts={data} />
        </section>
        <section title="Contacts" className="Section">
          <h2>Contacts</h2>
          <Filter value={filter} onChangeFilter={changeFilter} />
          <ContactList filteredContacts={filteredContacts} />
        </section>
      </div>
    </>
  );
}

export default App;
