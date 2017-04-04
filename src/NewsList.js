import React from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Content from './components/Content';

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      searchKey: '',
    }
  }

  setSearchKey(search) {
    this.setState({
      searchKey: search
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header setSearchKey={this.setSearchKey.bind(this)} />
        <MenuBar />
        <Content
          navigator={this.props.navigator}
          searchKey={this.state.searchKey}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
};

export default NewsList;
