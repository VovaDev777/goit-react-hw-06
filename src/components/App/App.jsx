import ContactForm from "../ContactForm/ContactForm"
import SearchBox from '../SearchBox/SearchBox'
import ContactList from "../ContactList/ContactList";
import css from './App.module.css'
import '../../reset.css'
import { useState } from "react";
import { useSelector } from "react-redux";

const App = () => {
 
  const [searchQuery, setSearchQuery] = useState("");
  const contacts = useSelector((state) => state.userData);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm />
      <SearchBox searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      <ContactList contacts={filteredContacts} />

    </div>
  )
}

export default App