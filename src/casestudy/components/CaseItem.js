import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from './Avatar';
import Card from './Card';
import './CaseItem.css';

const CaseItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/CaseStudy/${props.id}`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.project_name}</h2>
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


