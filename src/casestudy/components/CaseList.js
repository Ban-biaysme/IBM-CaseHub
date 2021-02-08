import React from 'react';

import CaseItem from './CaseItem';
import './CaseList.css';

const CaseList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No cases found.</h2>
      </div>
    );
  }

  return (
    <div>


        <ul className="cases-list case-item-color">

          {props.items.map(cases => (
            <CaseItem

              key={cases.project_id}
              id={cases.project_id}
              image={'data:image/png;base64,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'}
              project_name={cases.project_name}
              client_name={cases.client_name}
            />
          ))}
</ul>
    </div>
  );
};

export default CaseList;
