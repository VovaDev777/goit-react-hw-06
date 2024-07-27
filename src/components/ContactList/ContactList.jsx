import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({userinfo, onDeleteContact}) => {
  return (
    <div className={css.container}>
        {userinfo.map(({username, number}, index) => (
        <Contact key = {index} username = {username} number = {number} onDelete={() => onDeleteContact(index)}/>
      ))}
    </div>
  )
}

export default ContactList