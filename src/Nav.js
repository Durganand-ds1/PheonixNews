import React from "react";

import Drawer from "./Drawer";
import "./Nav.css";
function Nav({ setCategory }) {
  return (
    <>
      <div className="Nav">
        <Drawer setCategory={setCategory} />
        <div className="logo">
          <h1>Pheonix</h1>
        </div>
      </div>
    </>
  );
}

export default Nav;
