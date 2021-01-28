import React from 'react';

import CaseItem from './CaseItem';
import './CaseList.css';
import Cases from '../pages/Cases'

const CaseList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No cases found.</h2>
      </div>
    );
  }

  return (
    <ul className="cases-list">
      {props.items.map(cases => (
        <CaseItem

          key={cases.project_id}
          id={cases.project_id}
          image={ 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}
          name={cases.project_name}
          placeCount={2}
        />
      ))}
    </ul>
  );
};

export default CaseList;
