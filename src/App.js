import './App.css';
import React, { useState } from "react";
import Hangman from './Hangman';
import Header from './Header';


function App() {

  // darkmode
  const [dark, setdark] = useState("black");

  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Header dark={dark} setdark={setdark} />
      <Hangman dark={dark} setdark={setdark} />
    </div>
  );
}

export default App;
