import ContactForm from "../ContactForm/ContactForm"
import { useState, useEffect } from "react"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import css from './App.module.css'
import '../../reset.css'

const App = () => {
  // const [contacts, setContact] = useState(() => {
  //   const storedContacts = JSON.parse(localStorage.getItem("contacts"));
  //   return storedContacts ? storedContacts : [];
  // });
  // const [searchQuery, setSearchQuery] = useState("");


  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts))
  // }, [contacts])

  // const handleAddContact = (contact) => {
  //   setContact([...contacts, contact])
  // };

  // const handleDeleteContact = (index) => {
  //   setContact(contacts.filter((_, i) => i !== index));
  // };

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const filteredContacts = contacts.filter(contact =>
  //   contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />

    </div>
  )
}

export default App