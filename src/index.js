import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header/js/header";
import Sidebar from "./components/sidebar/js/sidebar";
import Content from "./components/content/js/content";


import "./styles/index.scss";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className="profile_ui">
    <Header />
    <div className="page-main">
      <Sidebar />
      <Content />
    </div>
    
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
