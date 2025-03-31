import { createSlice } from "@reduxjs/toolkit";
import userInitialState from "../UseContext/userInitialState.json";

const UserDataStorageFile = createSlice({
    name:"userDataStore",
    initialState : userInitialState,
    reducers: {
        UserDataStorage: (state, action) => {
          return action.payload;
        },
      },
    });
    
    export const { UserDataStorage } = UserDataStorageFile.actions;
    
    export default UserDataStorageFile.reducer;
    