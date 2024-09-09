import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/settings/SideBar";
import "./style/settings.scss";

export default function Settings() {
  const [index, setIndex] = useState();
  return (
    <div>
      <Navbar />
      <div className="settings">
        <SideBar setIndex={setIndex} />
        {index === "1" ? (
          <div>Content for index 1</div>
        ) : index === "2" ? (
          <div>Content for index 2</div>
        ) : index === "3" ? (
          <div>Content for index 3</div>
        ) : (
          <div>Default content</div>
        )}
      </div>
    </div>
  );
}
