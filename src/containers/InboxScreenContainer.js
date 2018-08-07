import React from 'react';
import { MODES } from '../constants';
import InboxScreen from '../screens/InboxScreen';

const InboxScreenContainer = () => (
    <InboxScreen mode={MODES.INBOX}/>
);
export default InboxScreenContainer;