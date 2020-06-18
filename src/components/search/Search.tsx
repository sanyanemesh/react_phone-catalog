import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getQuery } from '../../store';
import { setQuery } from '../../store/query';
import './Search.scss';

export const Search = () => {
  const query = useSelector(getQuery);
  const dispatch = useDispatch();

  return (
    <>
      <input
        className="Search__input"
        type="text"
        value={query}
        placeholder="Search "
        onChange={({ target }) => {
          dispatch(setQuery(target.value));
        }}
      />
    </>
  );
};
