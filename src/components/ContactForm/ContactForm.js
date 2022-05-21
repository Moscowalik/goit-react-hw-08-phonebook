import { useState} from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';
import { v4 as uuidv4 } from 'uuid';


export default function ContactForm ({addContact}){
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = (e) => {
        const name = e.target.name
        if (name === 'name'){
            setName(e.target.value)
        }
        if (name === 'number') {
            setNumber(e.target.value)
        }
          }
          const onSubmit = e => {
            e.preventDefault();
        
            const newContact = {
              id: uuidv4(),
              name,
              number,
            };
            addContact(newContact);
            reset();
          };
        
          const reset = () => {
            setName('');
            setNumber('');
          };

                  return (
            <form onSubmit ={onSubmit}>
                <h3>Name</h3>
                <label><input type="text" name="name"  onChange={e =>{handleChange(e)}} /></label><br/>
                <h3>Number</h3>
                <label><input type="tel" name="number"  onChange={e =>{handleChange(e)}} /></label><br/>
                <button type="submit" className="buttonForm">Add contact</button>
            </form>
        )
    }



ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    addContact: PropTypes.func.isRequired,
}

