import React, { useEffect } from 'react';
import { FilterStyle } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'Redux/contactsSlice.js';
import { fetchContactsThunk } from 'Redux/operations';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const handleFilterChange = (e) => {
    dispatch(updateFilter(e.target.value));
  };

  return (
    <FilterStyle.FilterSubtitle>
      Find contacts by name
      <FilterStyle.FilterInput
        type="text"
        placeholder="Search"
        value={filter}
        onChange={handleFilterChange}
      />
    </FilterStyle.FilterSubtitle>
  );
};


export default Filter;

