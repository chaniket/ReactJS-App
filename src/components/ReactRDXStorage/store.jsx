import { configureStore } from "@reduxjs/toolkit";
import UserDataStorage from "./UserDataStorageFile";
import incdecReducer from "./../ReactRedux/Reducers/index";

export default configureStore(
  {
    reducer: {
      userDataStorage: UserDataStorage,
      number: incdecReducer,
    },
  },
  window._REDUX_DEVTOOLS_EXTENTION && window._REDUX_DEVTOOLS_EXTENTION_()
);
