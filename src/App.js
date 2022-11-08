import './App.css';
import React, { useState } from "react";
import Hangman from './Hangman';
import Header from './Header';


function App() {

  // darkmode
  const [dark, setdark] = useState(localStorage.getItem("dark")||"white");

  return (
    <div className="App">
      {/* <Header dark={dark} setdark={setdark} /> */}
      <Hangman dark={dark} setdark={setdark} />
    </div>
  );
}

export default App;
