import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import BookShelf from './component/BookShelf';
import BookDetail from './component/BookDetail';

export default class App extends Component {

    render() {
        return (
            <Router>
                <Scene key = 'root'>
                    <Scene key = 'bookShelf' component = {BookShelf} title = "List Books" initial = {true} />
                    <Scene key = 'bookDetail' component = {BookDetail} title = "Detail" />
                </Scene>
            </Router>
        );
    }
}