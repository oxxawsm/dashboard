import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageTitle: 'Home',
    noOfNotifications: 3,
    newNotificationMessage: '',
    newNotificationStatus: 1,
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setPageTitle: (state, { payload }) => {
            state.pageTitle = payload.title;
        },
        removeNotificationMessage: (state) => {
            state.newNotificationMessage = '';
        },
        showNotification: (state, { payload }) => {
            state.newNotificationMessage = payload.message;
            state.newNotificationStatus = payload.status;
        },
    }
});

export const { 
    setPageTitle,
    removeNotificationMessage,
    showNotification
} = headerSlice.actions;

export default headerSlice.reducer;