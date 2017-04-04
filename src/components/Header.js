import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Header.styles';

const Header = props => (
  <View style={styles.header}>
    <Text style={styles.logo}>Detikcom</Text>
    <TextInput
      style={styles.searchInput}
      placeholder="Search Berita Disini...."
      value={props.searchKey}
      onChange={
        event => props.setSearchKey(event.nativeEvent.text)
      }
    />
  </View>
);
export default Header;
