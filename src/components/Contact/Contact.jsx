import css from './Contact.module.css'
import { AiOutlineUser, AiFillPhone } from "react-icons/ai";
import 'normalize.css';

const Contact = ({ contact, onDelete }) => {

  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.listItem}>
          <AiOutlineUser className={css.svgIcon} />
          <p className={css.text}>{contact.username}</p>
        </li>
        <li className={css.listItem}>
          <AiFillPhone className={css.svgIcon} />
          <p className={css.text}>{contact.number}</p>
        </li>
      </ul>
      <button type='submit' onClick={onDelete} className={css.btn}>Delete</button>
    </div>
  )
}

export default Contact