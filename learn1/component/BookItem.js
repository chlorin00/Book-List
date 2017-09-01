import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class BookItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const seeDetail = () => Actions.bookDetail({...this.props});
        return (
            <TouchableHighlight onPress = {seeDetail}>
                <View style = {styles.container}>
                    <Image source = {{uri: this.props.book_image}} style = {styles.img}/>
                    <View style = {styles.description}>
                        <Text style = {styles.titleText}>{this.props.title}</Text>
                        <Text style = {styles.authorText}>{this.props.author}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 150,
        borderBottomWidth: 0.2,
        borderColor: '#010101'
    },
    description: {
        flex: 3,
        marginRight: 5
    },
    titleText: {
        textAlign: 'right',
        fontSize: 18,
        fontWeight: 'bold'
    },
    authorText: {
        textAlign: 'right',
        fontSize: 14,
        fontStyle: 'italic'
    },
    img: {
        flex: 1,
        marginLeft: 10,
        height: 120,
        width: 79
    }
})