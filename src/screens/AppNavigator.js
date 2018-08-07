import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import {
    Header,
    Left,
    Right,
    Button,
    Text,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

import { MODES } from '../constants';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    navButton: {
        backgroundColor: '#818284',
        width: 34,
        height: 34,
        marginLeft: 4,
    },
    navIcon: {
        color: '#fff',
    },
    logoText: {
        fontSize: 12,
    }
});

const AppNavigator = ({ mode = MODES.CHANNELS, setMode = () => {} }) => (
    <Header style={{backgroundColor: '#f7efe0'}}>
        <Left>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 40, height: 38}}>
                    <Image source={require('../assets/logo-29x38.png')}/>
                </View>
                <View style={{width: 78, height: 38, justifyContent: 'center'}}>
                    <Text>{mode === MODES.CHANNELS
                        ? <View style={{width: 78, height: 38, justifyContent: 'center'}}>
                            <Text style={[styles.logoText, {marginTop: 10}]} >{'Promo'.toUpperCase()}</Text>
                            <Text style={[styles.logoText, {color: 'red'}]}>{'Portal'.toUpperCase()}</Text>
                          </View>
                        : mode}</Text>
                </View>
            </View>
        </Left>
        <Right>
            <Button rounded small
                    style={[styles.navButton, mode === MODES.CHANNELS ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.CHANNELS}
                    onPress={() => setMode(MODES.CHANNELS)}>
                <MaterialIcons style={styles.navIcon} size={22} name="widgets"/>
            </Button>

            <Button rounded small
                    style={[styles.navButton, mode === MODES.INBOX ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.INBOX}
                    onPress={() => setMode(MODES.INBOX)}>
                <MaterialIcons style={styles.navIcon} size={22} name="mail"/>
            </Button>

            <Button rounded small
                    style={[styles.navButton, mode === MODES.VIEW ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.VIEW}
                    onPress={() => setMode(MODES.VIEW)}>
                <MaterialIcons style={styles.navIcon} size={22} name="visibility"/>
            </Button>

            <Button rounded small
                    style={[styles.navButton, mode === MODES.OFFLINE ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.OFFLINE}
                    onPress={() => setMode(MODES.OFFLINE)}>
                <MaterialIcons style={styles.navIcon} size={22} name="phone-iphone"/>
            </Button>

            <Button rounded small
                    style={[styles.navButton, mode === MODES.FAVORITE ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.FAVORITE}
                    onPress={() => setMode(MODES.FAVORITE)}>
                <MaterialIcons style={styles.navIcon} size={22} name="favorite"/>
            </Button>

            <Button rounded small
                    style={[styles.navButton, mode === MODES.ACCOUNT ? {backgroundColor: '#ff8400'} : '']}
                    active={mode === MODES.ACCOUNT}
                    onPress={() => setMode(MODES.ACCOUNT)}>
                <MaterialIcons style={styles.navIcon} size={22} name="person"/>
            </Button>
        </Right>
    </Header>
);

AppNavigator.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

export default AppNavigator;
