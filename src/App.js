import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import Sidebar from "./Sidebar";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <img
        src="menu.png"
        alt="menu"
        className={!showSidebar ? "menuButton" : "hideButton"}
        onClick={() => {
          return setShowSidebar(!showSidebar);
        }}
      />

      {showSidebar && (
        <div className="divBackground">
          <h1 className="inline title">Coding addict</h1>
          <button
            className="inline xButton"
            onClick={() => {
              return setShowSidebar(!showSidebar);
            }}
          >
            <h1>X</h1>
          </button>

          <Sidebar />
        </div>
      )}
      <button onClick={() => setShowModal(!showModal)} className="center">
        Show Modal Content
      </button>
      {showModal && (
        <div className="modal">
          <h1 className="inline modalPos">This is modal</h1>
          <button
            className="inline xButton1"
            onClick={() => setShowModal(false)}
          >
            <h1>X</h1>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
