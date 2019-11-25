import React, { Component } from 'react';
import Spinner from '../Spinner/Spinner';

import './ItemDetails.css';

const Record = ({ item, field, label }) => {
  return (
    <li className='list-group-item'>
      <span className='term'>{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.getItemData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.getItemData();
    }
  }

  getItemData = () => {
    this.setState({ loading: true });
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item =>
      this.setState({ item, image: getImageUrl(item), loading: false })
    );
  };

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Please select a item from the list</span>;
    }
    const { name } = item;
    return (
      <div className='item-details card'>
        {/* {spinner}
        {content} */}
        <img className='person-image' src={image} alt={`${name}`} />

        <div className='card-body'>
          <h4>{name}</h4>
          <ul className='list-group list-group-flush'>
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const ItemView = ({ item, image }) => {
  const { name, gender, birthYear, eyeColor } = item;
  return (
    <>
      <img className='person-image' src={image} alt={`${name}`} />

      <div className='card-body'>
        <h4>{name}</h4>
        <ul className='list-group list-group-flush'>{this.props.children}</ul>
      </div>
    </>
  );
};
