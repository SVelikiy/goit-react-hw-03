import ContactForm from "../ContactForm/ContactForm";
import Contactlist from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import defaultContacts from '../../Contacts.json'
import { useEffect, useState } from "react";


export default function App() {

    const [contacts, setContacts] = useState(() => {
        const localContacts = window.localStorage.getItem("savedContacts");
        if (localContacts !== null) {
            return JSON.parse(localContacts);
        }
        return defaultContacts;
    });
    const [filter, setFilter] = useState('')

    const addContact =  (newContact) => {
        setContacts((prevContacts) => {
            return [...prevContacts,newContact]
        })
    }
    const deleteContact = (contactId) => {
        setContacts((prevContact) => {
            return prevContact.filter((contacts)=> contacts.id !== contactId)
        })
    }
    const visibleContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
    useEffect(() => {
        window.localStorage.setItem('savedContacts', JSON.stringify(contacts));
    }, [contacts]);
  return (
    <div>
          <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <Contactlist contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}
