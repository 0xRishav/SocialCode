import React from "react";
import { Menu, People } from "../../components";
import "./MenuPeopleCont.css";

function MenuPeopleCont() {
  return (
    <div className="MenuPeopleCont">
      <h1 style={{ margin: "16px" }} className="MenuPeopleCont__logo">
        RSocial
      </h1>
      <div className="MenuPeopleCont__menuPeopleWrapper">
        <Menu />
        <People />
      </div>
    </div>
  );
}

export default MenuPeopleCont;
