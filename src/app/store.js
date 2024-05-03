import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../slices/headerSlice'
import modalSlice from '../slices/modalSlice'
import rightDrawerSlice from '../slices/rightDrawerSlice'
import teamSlice from '../slices/teamSlice'

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  team: teamSlice
}

export default configureStore({
  reducer: combinedReducer
})