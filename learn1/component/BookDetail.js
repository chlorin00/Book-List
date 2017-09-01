import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import { Actions } from 'react-native-router-flux';

export default class BookDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style = {styles.container}>
                <Image source = {{uri: this.props.book_image}}
                    style = {styles.img}
                    resizeMode = 'cover'
                />
                <View style = {styles.overlay}>
                    <View>
                        <Text style = {styles.detail}>{this.props.title}</Text>
                        <Text style = {styles.detail}>{this.props.author}</Text>
                        <Text style = {styles.detail}>{this.props.publisher}</Text>
                        <Text style = {styles.detail}>{this.props.description}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        flex: 1,
        width: 300,
        flexDirection: 'column'
    },
    overlay: {
        height: 200,
        backgroundColor: '#000000',
        opacity: 0.5,
        flexDirection: 'column',
        alignItems: 'center'
    },
    detail: {
        flex: 1,
        textAlign: 'center',
        color: '#ffffff'
    }
});
