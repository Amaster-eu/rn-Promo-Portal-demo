import React from 'react';
import {Container} from 'native-base';

import {createStore} from 'redux';
import Provider from 'react-redux/es/components/Provider';

import reducers from './reducers';
import {MODES} from './constants';
import PropTypes from "prop-types";

import AppHeaderContainer from './containers/AppNavigatorContainer.js';
import AppViewContainer from "./containers/AppViewContainer";

const initialState = {mode: MODES.CHANNELS};
const store = createStore(reducers, initialState);

const App = () => (
    <Provider store={store}>
        <Container style={{backgroundColor: '#dfdfdf'}}>
            <AppHeaderContainer />
            <AppViewContainer />
        </Container>
    </Provider>
);

App.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func
};

export default App;