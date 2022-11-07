import React, { useState } from "react";
import "./App.css";

// 3:40 import random word

export default function Hangman({ dark, setdark }) {
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  //   const word
  const [wordToGuess, setwordToGuess] = useState("TEST");
  const [guessedLetters, setguessedLetters] = useState([]);
  const maskedWord = wordToGuess
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  const [lives, setlives] = useState(6);
  const [visiblepart, setvisiblepart] = useState(7);
  const [customizebtn, setcustomizebtn] = useState("hidden");
  

  return (
    <>
      <div className={`py-4 bg-green-700 h-screen`}>
        <div className={`text-${dark === "white" ? "" : "white"}`}>
          Find the hidden word
        </div>
        {/* <button
          className="border-2 border-black"
          //   onClick={() => {
          //     if (dark === "white") {
          //       setdark("black");
          //     } else {
          //       setdark("white");
          //     }
          //   }}
        >
          Dark Mode
        </button> */}
        <button
          className={`border-2 border-black rounded-md py-1 px-3 text-${
            dark === "white" ? "" : "white"
          }`}
          onClick={() => {
            if (customizebtn === "hidden") {
              setcustomizebtn("");
            } else {
              setcustomizebtn("hidden");
            }
          }}
        >
          Customize
        </button>
        <div className={`flex mx-4 my-2 justify-center ${customizebtn}`}>
          <button
            className={`border-2 border-black rounded-md py-1 px-3 text-${
              dark === "white" ? "" : "white"
            }`}
          >
            Change colour
          </button>
          <button
            className={`border-2 border-black rounded-md py-1 px-3 text-${
              dark === "white" ? "" : "white"
            }`}
            onClick={() => {
              if (dark === "white") {
                setdark("black");
              } else {
                setdark("white");
              }
            }}
          >
            Change text colour
          </button>
          <button
            className={`border-2 border-black rounded-md py-1 px-3 text-${
              dark === "white" ? "" : "white"
            }`}
          >
            Change colour intensity
          </button>
        </div>
        <div className="mx-auto my-4">
          <svg
            height="250"
            width="200"
            className={`mx-auto figure-container stroke-${
              dark === "white" ? "black" : "white"
            } stwh`}
          >
            {/* <!-- Rod --> */}
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {/* <!-- Head --> */}
            <circle
              cx="140"
              cy="70"
              r="20"
              className={`${
                visiblepart === 1 ||
                visiblepart === 2 ||
                visiblepart === 3 ||
                visiblepart === 4 ||
                visiblepart === 5 ||
                visiblepart === 6
                  ? ""
                  : "hidden"
              }`}
            />
            {/* <!-- Body --> */}
            <line
              x1="140"
              y1="90"
              x2="140"
              y2="150"
              className={`${
                visiblepart === 1 ||
                visiblepart === 2 ||
                visiblepart === 3 ||
                visiblepart === 4 ||
                visiblepart === 5
                  ? ""
                  : "hidden"
              }`}
            />
            {/* <!-- Arms --> */}
            <line
              x1="140"
              y1="120"
              x2="120"
              y2="100"
              className={`${
                visiblepart === 1 ||
                visiblepart === 2 ||
                visiblepart === 3 ||
                visiblepart === 4
                  ? ""
                  : "hidden"
              }`}
            />
            <line
              x1="140"
              y1="120"
              x2="160"
              y2="100"
              className={`${
                visiblepart === 1 || visiblepart === 2 || visiblepart === 3
                  ? ""
                  : "hidden"
              }`}
            />
            {/* <!-- Legs --> */}
            <line
              x1="140"
              y1="150"
              x2="120"
              y2="180"
              className={`${
                visiblepart === 1 || visiblepart === 2 ? "" : "hidden"
              }`}
            />
            <line
              x1="140"
              y1="150"
              x2="160"
              y2="180"
              className={`${visiblepart === 1 ? "" : "hidden"}`}
            />
          </svg>
        </div>
        <div className={`text-${dark === "white" ? "" : "white"}`}>
          <div className="text-2xl">{maskedWord}</div>
          <div>Pick a letter below</div>
          <div>Lives : {lives}</div>
          <div className="w-9/12 mx-auto">
            {alphabets.map((alphabet, index) => (
              <>
                <button
                  className={`m-1 py-1 px-3 border-2 border-${
                    dark === "white" ? "black" : "white"
                  } rounded-md`}
                  onClick={() => {
                    if (wordToGuess.includes(alphabet)) {
                      setguessedLetters([...guessedLetters, alphabet]);
                    } else {
                      setlives(lives - 1);
                      setvisiblepart(visiblepart - 1);
                    }
                  }}
                  key={index}
                >
                  {alphabet}
                </button>
              </>
            ))}
          </div>
          <div className={`${lives === 0 ? "" : "hidden"}`}>
            Oops ! You lost
          </div>
        </div>
      </div>
    </>
  );
}
