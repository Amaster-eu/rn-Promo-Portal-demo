import React from 'react';
import { MODES } from '../constants';
import OfflineScreen from '../screens/OfflineScreen';

const OfflineScreenContainer = () => (
    <OfflineScreen mode={MODES.OFFLINE}/>
);
export default OfflineScreenContainer;