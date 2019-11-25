import React from 'react';
import './ItemList.css';

const ItemList = props => {
  const { listData, onItemSelected, children } = props;

  const items = listData.map(item => {
    const { id } = item;
    const value = children(item);
    return (
      <li
        className='list-group-item'
        key={id}
        onClick={() => onItemSelected(id)}
      >
        {value}
      </li>
    );
  });
  return (
    <div>
      <ul className='item-list list-group'>{items}</ul>
    </div>
  );
};

export default ItemList;
