import React from 'react';
import { MODES } from '../constants';
import ViewScreen from '../screens/ViewScreen';

const ViewScreenContainer = () => (
    <ViewScreen mode={MODES.VIEW}/>
);
export default ViewScreenContainer;