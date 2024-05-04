import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    header: '',
    isOpen: false,
    bodyType: '',
    extraObject: {},
};

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState,
    reducers: {
        openRightDrawer: (state, { payload }) => {
            const { header, bodyType, extraObject } = payload;
            state.isOpen = true;
            state.header = header;
            state.bodyType = bodyType;
            state.extraObject = extraObject;
        },
        closeRightDrawer: (state) => {
            return {
                ...initialState,
                isOpen: false
            };
        },
    }
});

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions;

export default rightDrawerSlice.reducer;