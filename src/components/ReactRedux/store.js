import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from "./Reducers/index";

export default configureStore(
  {
    reducer: {
      number: incdecReducer,
    },
  },
  window._REDUX_DEVTOOLS_EXTENTION && window._REDUX_DEVTOOLS_EXTENTION_()
);
