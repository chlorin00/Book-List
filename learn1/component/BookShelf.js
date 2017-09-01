import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BookList from './BookList'

export default class BookShelf extends Component {

  render() {
    return (
      <View style = {styles.container}>
        <BookList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
