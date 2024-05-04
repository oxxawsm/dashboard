import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Создание асинхронного действия с использованием createAsyncThunk
export const getTeamContent = createAsyncThunk('team/fetchContent', async () => {
    const response = await axios.get('/api/users?page=2');
    return response.data;
});

const initialState = {
    isLoading: false,
    team: [],
};

export const teamSlice = createSlice({
    name: 'team',
    initialState,
    reducers: {
        // Добавление нового члена команды
        addNewTeamMember: (state, { payload }) => {
            state.team.push(payload.newTeamObj);
        },
        // Удаление участника команды
        deleteTeamMember: (state, { payload }) => {
            state.team = state.team.filter((_, index) => index !== payload.index);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTeamContent.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTeamContent.fulfilled, (state, { payload }) => {
                state.team = payload.data;
                state.isLoading = false;
            })
            .addCase(getTeamContent.rejected, (state) => {
                state.isLoading = false;
            });
    }
});

export const { addNewTeamMember, deleteTeamMember } = teamSlice.actions;
export default teamSlice.reducer;