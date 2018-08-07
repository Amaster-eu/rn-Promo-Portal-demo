import React from 'react';
import {MODES} from "../constants";
import AccountScreen from "../screens/AccountScreen";

const AccountScreenContainer = () => (
    <AccountScreen mode={MODES.ACCOUNT} />
);
export default AccountScreenContainer;