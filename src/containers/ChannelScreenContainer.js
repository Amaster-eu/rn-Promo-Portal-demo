import React from 'react';
import { MODES } from '../constants';
import ChannelScreen from '../screens/ChannelScreen';

const ChannelScreenContainer = () => (
    <ChannelScreen mode={MODES.CHANNEL}/>
);
export default ChannelScreenContainer;