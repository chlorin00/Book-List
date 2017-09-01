import React from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import BookItem from './BookItem'

let Books = [{}]
  // {
  //   title: "THE LATE SHOW",
  //   author: "Michael Connelly",
  //   description: "Renée Ballard, a young detective with the L.A.P.D., investigates crimes against two women.",
  //   book_image: "https://s1.nyt.com/du/books/images/9780316225984.jpg"
  // }

export default class BookList extends React.Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Books)
    }
  }

  componentWillMount() {
    fetch(`http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9%3A2%3A60667290`)
    .then((response) => response.json())
    .then((responseJSON) => {
      Books = responseJSON.results.books;
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(Books)
      })
    })
  }

  _renderRow(rowData) {
    return <BookItem {...rowData} />
  }

  render() {
    return (
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}
      />
    );
  }
}
