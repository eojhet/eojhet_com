import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: undefined,
  userId: undefined,
  joinDate: undefined,
  displayName: 'Guest',
  firstName: undefined,
  lastName: undefined,
  bio: undefined,
  __v: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

  }
})

export const selectProfile = (state) => state.profile.displayName;

export default profileSlice.reducer