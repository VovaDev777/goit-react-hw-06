
import css from './SearchBox.module.css'

const SearchBox = ({searchQuery, onSearchChange}) => {
  return (
    <form className={css.form}>
        <label className={css.label}>Find contacts by name</label>
        <input 
          type="text" 
          className={css.input}
          value={searchQuery} 
          onChange={onSearchChange} 
          />
    </form>
  )
}

export default SearchBox