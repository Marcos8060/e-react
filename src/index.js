import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AuthProvider from "./context/AuthContext";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit";
import Maids from "./components/Maids";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<App />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path=":username/profile" element={<Profile />}></Route>
          <Route exact path="/create/:id" element={<ProfileEdit />}></Route>
          <Route exact path="/maids" element={<Maids />}></Route>
        </Routes>
      </AuthProvider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
