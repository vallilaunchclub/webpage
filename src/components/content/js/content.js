import React from "react";
import Name from "./name";
import Rankings from "./rankings";
import About from "./about";
import Menu from "./menu";
import SubPage from "./subpage";

function content() {
  return (
    <div className="content">
      <div className="content-components">
        <Name/>
        <Rankings/>
        <Menu/>
        <SubPage/>
        <About/>
      </div>
    </div>
  );
}

export default content;
