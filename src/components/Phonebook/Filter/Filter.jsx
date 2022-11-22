import { useDispatch, useSelector } from 'react-redux';
import { filterValue, getFilter } from '../../../redux/filterSlise';
// import PropTypes from 'prop-types';
import { Input, Span } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const onChange = (event) => {
    dispatch(filterValue(event.target.value.toLowerCase()));
  }
  return (
    <label htmlFor="filter">
      <Span>Find contacts by name</Span>
      <Input onChange={onChange} type="filter" name="filter" value={filter}/>
    </label>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
// };
