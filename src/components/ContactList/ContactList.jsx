import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { deleteUserData } from '../../redux/store';
import { useDispatch } from 'react-redux';

const ContactList = ({contacts}) => {

  
  const dispatch = useDispatch();

  const onDeleteContact = (index) => {
    dispatch(deleteUserData(index));
  }

  return (
    <div className={css.container}>
      {contacts.map(({ username, number }, index) => (
        <Contact key={index}
          username={username}
          number={number}
          onDelete={() => onDeleteContact(index)} />
      ))}
    </div>
  )
}

export default ContactList