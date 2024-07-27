import { useSelector } from 'react-redux'
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({userinfo, onDeleteContact}) => {

  const userName = useSelector((state) => state.userData.name);

  return (
    <div className={css.container}>
        {userinfo.map(({username, number}, index) => (
        <Contact key = {index} username = {username} number = {number} onDelete={() => onDeleteContact(index)}/>
      ))}
    </div>
  )
}

export default ContactList