/**
 * Sample React Native App
 * 背包实例
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

let badgeData = require('./BadgeData.json');

let dimensions = require('Dimensions');
let dimensionsWidth = dimensions.get('window').width;

let cols = 3;
let boxW = 100;
let marginW = (dimensionsWidth - cols * boxW) / (cols + 1);
let marginH = 20;

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>
                {App.renderAllBadge()}
            </View>
        );
    }

    static renderAllBadge() {
        let allBadge = [];
        for (let i = 0; i < badgeData.data.length; i++) {
            let badge = badgeData.data[i];
            allBadge.push(
                <View key={i} style={styles.viewStyle}>
                    <Image source={{uri: badge.icon}} style={styles.imageStyle}/>
                    <Text style={styles.textStyle}>
                        {badge.title}
                    </Text>
                </View>
            )
        }
        return allBadge;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    viewStyle: {
        backgroundColor: 'yellow',
        width: boxW,
        alignItems: 'center',
        marginTop:marginH,
        marginLeft:marginW,
    },
    imageStyle: {
        width: 80,
        height: 80,
    },
    textStyle: {}

});
