import { useAddContactMutation } from '../../redux/contactsSlice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import './ContactForm.css';

export default function ContactForm({ contacts }) {
  const [createContact, { isLoading }] = useAddContactMutation();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;
    const contactsName = contacts.map(contact => contact.name);
    if (contactsName.includes(name)) {
      return Notify.failure('This contact already exists');
    }
    createContact({ name, number });
    Notify.success('Adding  successfully');

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Name</h3>
      <label>
        Name{' '}
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <br />
      <h3>Number</h3>
      <label>
        Number{' '}
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <br />
      <button type="submit" className="buttonForm">
        {isLoading ? 'Adding...' : 'Add contact'}
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.array,
};
