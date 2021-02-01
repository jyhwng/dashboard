import React from 'react';
import { Icon } from 'semantic-ui-react';
import './Pagination.css';

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="pagination">
      <button><span>first</span></button>
      <button className="arrow"><Icon name="angle left"/></button>
      <div className="page-numbers">
        {pages.map(number => {
          return <button key={number}><span>{number}</span></button>
        })}
      </div>
      <button className="arrow"><Icon name="angle right"/></button>
      <button><span>last</span></button>
    </div>
  );
}

export default Pagination;
