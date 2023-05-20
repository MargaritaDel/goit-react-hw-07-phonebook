import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput onChange={handleFilterChange} type="search" name="filter" id="" />
    </>
  );
};

export default Filter;