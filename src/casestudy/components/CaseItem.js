import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import Card from './Card';
import './CaseItem.css';

const CaseItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/${props.id}/CaseStudy`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h4>{props.project_name}</h4>
            <h5>
              {props.client_name}
            </h5>
            <h5>{props.project_industry}</h5>
            <h5>{props.project_start_date}</h5>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default CaseItem;


