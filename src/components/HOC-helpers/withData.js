import React, { Component } from 'react';
import Spinner from '../../components/Spinner/Spinner';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      listData: null
    };

    componentDidMount() {
      getData().then(listData => {
        this.setState({
          listData
        });
      });
    }
    render() {
      const { listData } = this.state;

      if (!listData) {
        return <Spinner />;
      }

      return <View {...this.props} listData={listData} />;
    }
  };
};

export default withData;
