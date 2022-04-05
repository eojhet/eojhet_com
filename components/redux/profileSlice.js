import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import GetToken from "../getToken";

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
    getProfile: (state, action) => {
      state._id = action.payload._id;
      state.joinDate = action.payload.joinDate;
      state.displayName = action.payload.displayName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.bio = action.payload.bio;      
    }
  }
})

export const { getProfile } = profileSlice.actions;

export const GetProfile = () => async (dispatch) => {
  let token = 'Bearer ' + GetToken();
  let data = await axios({
    method: 'get',
    url: '/api/profile',
    headers: {Authorization: token},
  })
  .then(function (res) {
    return res.data
  })
  .catch(function (err) {
    console.log('token ', token, 'err', err);
    return
  })

  dispatch(getProfile(data));
}

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer