import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NewsComments = props => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => props.navigator.pop()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>&lt; Back</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
      <Text>Ini adalah halaman detil comment</Text>
    </View>
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'teal',
    height: '10%',
    width: '100%',
    padding: 30,
  },
  content: {
    height: '90%',
    width: '100%',
    padding: 20,
  },
  buttonText: {
    color: '#FFFFFF',
  }
}

export default NewsComments;
