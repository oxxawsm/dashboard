import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    isOpen: false,
    bodyType: '',
    size: 'md',
    extraObject: {},
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, { payload }) => {
            const { title, bodyType, size = 'md', extraObject } = payload;
            return { ...state, isOpen: true, title, bodyType, size, extraObject };
        },
        closeModal: () => ({
            ...initialState, size: initialState.size
        }),
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;