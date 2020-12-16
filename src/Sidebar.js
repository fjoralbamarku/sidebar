import React from "react";
import { links } from "./data";
import { social } from "./data";

const Sidebar = () => {
  return (
    <div>
      <div>
        {links.map((link) => {
          return <h3>{link.text}</h3>;
        })}
      </div>
      <div className="socialPosition ">
        {social.map((item) => {
          return <img className="socials" src={item.icon} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
