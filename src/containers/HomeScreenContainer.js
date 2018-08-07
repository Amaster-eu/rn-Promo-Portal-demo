import React from 'react';
import { MODES } from '../constants';
import HomeScreen from '../screens/HomeScreen';

const HomeScreenContainer = () => (
    <HomeScreen mode={MODES.CHANNELS}/>
);
export default HomeScreenContainer;
