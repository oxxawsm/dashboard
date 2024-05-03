import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTeamContent = createAsyncThunk('/team/content', async () => {
    const response = await axios.get('/api/users?page=2', {})
    return response.data;
})

export const teamSlice = createSlice({
    name: 'team',
    initialState: {
        isLoading: false,
        team: []
    },
    reducers: {
        addNewTeamMember: (state, action) => {
            let { newLeadObj } = action.payload
            state.team = [...state.team, newLeadObj]
        },

        deleteTeamMember: (state, action) => {
            let { index } = action.payload
            state.team.splice(index, 1)
        }
    },

    extraReducers: {
        [getTeamContent.pending]: state => {
            state.isLoading = true
        },
        [getTeamContent.fulfilled]: (state, action) => {
            state.team = action.payload.data
            state.isLoading = false
        },
        [getTeamContent.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const { addNewTeamMember, deleteTeamMember } = teamSlice.actions

export default teamSlice.reducer