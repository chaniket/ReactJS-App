import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header"; //if export is used with default function
import { Footer } from "./Header/Footer";
import { Student } from "./components/Student";
import Course from "./components/Course";
//import {Header,Footer} from './Header/header';//if exported multiple function//loop Header.js
//import {Header} from './Header/header';
//import Header,{Footer} from './Header/Header';
import Movies from "./components/Movies";
import moviesList from "./components/Kmovies.json";
import React, { useState } from "react";
import UseState from "./components/UseState/UseState";
import MaterialUIWithLoginForm from "./components/MaterialUIWithLoginForm/MaterialUIWithLoginForm";
import SetFormDetails from "./components/SetFormDetails/SetFormDetails";
import UseEffect from "./components/UseEffect/UseEffect";
import UseEffectWithApiCall from "./components/UseEffectWithApiCall/UseEffectWithApiCall";
import UseContextWithApi from "./components/UseContext/UseContextWithApi";
import UseEffectWithTimer from "./components/UseEffect/UseEffectWithTimer";
import { UseContextWithComponents } from "./components/UseContext/UseContextWithComponents";
import Dashboard from "./components/Dashboard/Dashboard";
import UrlParameterEx from "./components/RoutesEx/UrlParameterEx";
import UsersRoute from "./components/RoutesEx/UsersRoute";
import UseRefCourse from "./components/UseRefCourse/UseRefCourse";
import UseRefCourseWithOutUseEff from "./components/UseRefCourse/UseRefCourseWithOutUseEff";
import UseReducer from "./components/UseReducer/UseReducer";
import CustomHook from "./components/CustomHook/CustomHook";
import UseMemoHook from "./components/UseMemoHook/UseMemoHook";
import UseCallBackHook from "./components/UseCallBackHook/UseCallBackHook";
import UseCallBackHookSolution from "./components/UseCallBackHook/UseCallBackHookSolution";
import LoadingScreen from "./components/LoaderAndToastify/LoadingScreen";
import SimpleClass from "./components/OOP/SimpleClass";
import ReactRedux from "./components/ReactRedux/ReactRedux";
import FormUsingReact from "./components/CreateFormUsingReact/FormUsingReact"

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  let name = "Aniket Chavan Patil";
  //<UseEffectWithApiCall />
  //<UseContextWithApi />
  return (
    <div className="App">

    <ReactRedux />
      

      <br />
      <br />
    </div>
  );
}

/*
{
  <div className="poster" style={{ display: "none" }}>
  {moviesList.map((element, index) => {
    return (
      <Movies
        key={index}
        element={element}
        Title={element.Title}
        Year={element.Year}
        Poster={element.Poster}
      />
    );
  })}
</div>

}
*/

export default App;
