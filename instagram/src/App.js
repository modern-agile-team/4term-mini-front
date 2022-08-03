import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { injectGlobal } from "@emotion/css";
import { Login, Main, SignUp, User, Explore } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/username" element={<User />}></Route>
      </Routes>
    </Router>
  );
}

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    box-sizing: border-box; 
  }
  textarea {
    resize: none;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  } 
  ul {
    list-style: none;
  }
  li {
    list-style:none;
  }
  a, a:visited, a:link {
    color: inherit;
    text-decoration: none;
  }
`;

export default App;
