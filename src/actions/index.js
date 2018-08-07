import {SET_CHANNEL, SET_MODE} from './actionTypes';

export const setMode = (mode) => ({
    type: SET_MODE, mode
});

export const setChannel = (channel) => ({
    type: SET_CHANNEL, channel
});

