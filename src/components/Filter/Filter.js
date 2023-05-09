import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const data = e.target.value.trim();
    dispatch(changeFilter(data));
  };

  return (
    <div className={css.filter}>
      <label className={css.title} htmlFor="filter">
        Find contact by name
      </label>
      <input
        onChange={onFilterChange}
        className={css.input}
        type="text"
        name="name"
        // value={filter}
        id="filter"
      />
    </div>
  );
};

export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilter: PropTypes.func.isRequired,
// };
