import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { deleteContact, selectContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {


  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filters.name);

  const filteredContacts = contacts.filter(contact =>
    contact.username.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.container}>
      {filteredContacts.map(contact => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={handleDelete} />
      ))}
    </div>
  )
}

export default ContactList