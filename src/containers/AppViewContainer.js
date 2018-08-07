import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppView from '../screens/AppView.js';

const mapStateToProps = (state) => ({
    mode: state.mode
});

const AppViewContainer = ({mode, setChannel}) => (
    <AppView mode={mode} setChannel={setChannel}/>
);

AppViewContainer.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

export default connect(
    mapStateToProps
)(AppViewContainer);
