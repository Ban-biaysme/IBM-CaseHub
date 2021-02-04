import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import Card from './Card';
import './CaseItem.css';

const CaseItem = props => {
  return (
    <li className="case-item">
      <Card className="case-item__content">
        <Link to={`/EditCaseStudy/${props.id}`}>
          <div className="case-item__image">
            <Icon image={props.image} alt={props.name} />
          </div>
          <div className="case-item__info">
            <h5>{props.project_name}</h5>
            <h3>
              {props.client_name}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CaseItem;


