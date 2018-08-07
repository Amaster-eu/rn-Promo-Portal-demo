import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setMode, setChannel } from '../actions';
import AppNavigator from '../screens/AppNavigator.js';

const mapStateToProps = (state) => ({
    mode: state.mode,
    channel: state.channel
});

const mapDispatchToProps = (dispatch) => ({
    setMode(mode) {
        // console.log('👉',mode);
        dispatch(setMode(mode));
    },
    setChannel(channel) {
        console.log('👉channel', channel);
        dispatch(setChannel(channel));
    }
});

const AppNavigatorContainer = ({mode, setMode}) => (
    <AppNavigator mode={mode} setMode={setMode}/>
);

AppNavigatorContainer.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func,
    channel: PropTypes.any,
    setChannel: PropTypes.func
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppNavigatorContainer);
