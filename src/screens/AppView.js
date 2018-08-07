import React from 'react';
import {StyleSheet, View} from 'react-native';

import {MODES} from '../constants';
import PropTypes from 'prop-types';

import {Content} from "native-base";

import HomeScreenContainer from "../containers/HomeScreenContainer";
import ChannelScreenContainer from "../containers/ChannelScreenContainer";
import InboxScreenContainer from "../containers/InboxScreenContainer";
import ViewScreenContainer from "../containers/ViewScreenContainer";
import OfflineScreenContainer from "../containers/OfflineScreenContainer";
import FavoriteScreenContainer from "../containers/FavoriteScreenContainer";
import AccountScreenContainer from "../containers/AccountScreenContainer";

const styles = StyleSheet.create({
    container: {
        padding: 4,
    },
});

const AppView = ({ mode = MODES.CHANNELS }) => (
    <Content>
        <View style={styles.container}>
            {mode === MODES.CHANNELS && <HomeScreenContainer/>}
            {mode === MODES.CHANNEL && <ChannelScreenContainer/>}
            {mode === MODES.INBOX && <InboxScreenContainer/>}
            {mode === MODES.VIEW && <ViewScreenContainer/>}
            {mode === MODES.OFFLINE && <OfflineScreenContainer/>}
            {mode === MODES.FAVORITE && <FavoriteScreenContainer/>}
            {mode === MODES.ACCOUNT && <AccountScreenContainer/>}
        </View>
    </Content>
);

AppView.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

export default AppView;
