import React from 'react';
import { MODES } from '../constants';
import FavoriteScreen from '../screens/FavoriteScreen';

const FavoriteScreenContainer = () => (
    <FavoriteScreen mode={MODES.FAVORITE}/>
);
export default FavoriteScreenContainer;