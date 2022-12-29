import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Main";
import Modal from "./Modal";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
     
      <Main setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;