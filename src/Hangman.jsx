import React, { useState, useEffect } from "react";
import "./App.css";
import redheart from "./red-heart.png";
import fruits from "./fruits.json";
import fruit from "./fruit.json";
import animals from "./animals.json";

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
  //   const wordarray = [
  //     "Apple",
  //     "Avocado",
  //     "banana",
  //     "orange",
  //     "pineapple",
  //     "kiwi",
  //     "lemon",
  //     "melon",
  //   ];
  //   const [wordToGuess, setwordToGuess] = useState(
  //     wordarray[Math.floor(Math.random() * (7 - 0) + 0)].toUpperCase()
  //   );
  //   const [wordToGuess, setwordToGuess] = useState(
  //     fruits[Math.floor(Math.random() * (38 - 0) + 0)].name.toUpperCase()
  //   );
  const [object, setobject] = useState(
    // localStorage.getItem("object") ||
    "Fruits"
  );
  const [wordToGuess, setwordToGuess] = useState(
    // localStorage.getItem("wordToGuess") ||
    fruit[Math.floor(Math.random() * (38 - 0) + 0)].toUpperCase()
  );
  const [guessedLetters, setguessedLetters] = useState([]);
  const maskedWord = wordToGuess
    .split("")
    .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
    .join(" ");
  const [lives, setlives] = useState(6);
  const [visiblepart, setvisiblepart] = useState(7);
  const [customizebtn, setcustomizebtn] = useState("hidden");

  const [colorarray, setcolorarray] = useState([
    "bg-green-700",
    "bg-red-700",
    "bg-yellow-700",
    "bg-blue-700",
    "bg-purple-700",
    "bg-pink-700",
    "bg-orange-700",
    "bg-stone-700",
    "bg-teal-700",
  ]);
  //   const [color, setcolor] = useState("bg-green-700");
  const [colorindex, setcolorindex] = useState(
    localStorage.getItem("colorindex") || 0
  );
  const [color, setcolor] = useState(colorarray[colorindex]);

  useEffect(() => {
    setcolor(colorarray[colorindex]);
  }, [colorindex]);

  useEffect(() => {
    if (lives === 0 || !maskedWord.includes("_")) {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  });

  // Timer
  const [timer, settimer] = useState(120);
  useEffect(() => {
    if (lives === 0 || !maskedWord.includes("_")) {
      settimer(120);
    } else if (timer !== 0) {
      setTimeout(() => {
        settimer(timer - 1);
      }, 1000);
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
    // if (!maskedWord.includes("_")) {
    //   setscore(score + 100);
    // }
  });

  // Jhol on clicking hangman
  const [jholword, setjholword] = useState("HANGMAN");
  function jhol() {
    alert("You did jhol lol");
    setjholword(wordToGuess);
    setTimeout(() => {
      setjholword("HANGMAN");
    }, 1500);
  }

//   const [score, setscore] = useState(localStorage.getItem("score") || 0);

  useEffect(() => {
    localStorage.setItem("colorindex", colorindex);
    localStorage.setItem("dark", dark);
    localStorage.setItem("object", object);
    localStorage.setItem("wordToGuess", wordToGuess);
  }, [colorindex || dark || object]);

//   useEffect(() => {
//     localStorage.setItem("score", score);
//   }, [score]);

  return (
    <>
      <div
        onClick={jhol}
        className={`font-bold text-xl p-1 bg-yellow-600 text-white`}
      >
        {jholword}
      </div>
      <div className={`p-4 ${color} h-[1200px] xl:h-screen 2xl:h-screen`}>
        <div className={`mb-2 text-${dark}`}>Find the hidden word</div>
        <div className="flex justify-center space-x-2">
          <div className={`mb-2 text-${dark}`}>Time left : {timer}s</div>
          {/* <div className={`mb-2 text-${dark}`}>Current score : {score}</div> */}
        </div>
        <button
          className={`border-2 ${
            dark === "white" ? "border-white" : "border-black"
          } rounded-md mr-1 py-1 px-3 text-${dark} hover:scale-90`}
          onClick={() => {
            navigator.vibrate(100);
            if (customizebtn === "hidden") {
              setcustomizebtn("");
            } else {
              setcustomizebtn("hidden");
            }
          }}
        >
          Customize
        </button>
        <button
          className={`border-2 ${
            dark === "white" ? "border-white" : "border-black"
          } rounded-md ml-1 py-1 px-3 text-${dark} hover:scale-90`}
          onClick={() => {
            navigator.vibrate(100);
            if (object === "Animals") {
              setwordToGuess(
                fruit[Math.floor(Math.random() * (38 - 0) + 0)].toUpperCase()
              );
              setobject("Fruits");
            } else {
              setwordToGuess(
                animals[Math.floor(Math.random() * (38 - 0) + 0)].toUpperCase()
              );
              setobject("Animals");
            }
          }}
        >
          {object}
        </button>
        <div
          className={`flex mx-4 my-2 space-x-2 justify-center ${customizebtn}`}
        >
          <button
            className={`border-2 border-${dark} rounded-md py-1 px-3 text-${dark} hover:scale-90`}
            onClick={() => {
              navigator.vibrate(100);
              //   changecolor();
              setcolorindex((colorindex + 1) % 9);
            }}
          >
            Change background colour
          </button>
          <button
            className={`border-2 border-${dark} rounded-md py-1 px-3 text-${dark} hover:scale-90`}
            onClick={() => {
              navigator.vibrate(100);
              if (dark === "white") {
                setdark("black");
              } else {
                setdark("white");
              }
            }}
          >
            Change text colour
          </button>
        </div>
        <div className="xl:flex 2xl:flex ">
          <div className="mx-auto my-4">
            <svg
              height="250"
              width="200"
              className={`mx-auto figure-container ${
                dark === "white" ? "stroke-white" : "stroke-black"
              } ${lives === 1 || lives === 0 ? "stroke-red-600" : ""}`}
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
          <div className={`text-${dark}`}>
            <div className="text-2xl xl:mt-8 2xl:mt-8 py-1 px-5 rounded-lg inline-block bg-stone-400">
              {maskedWord}
            </div>
            <div className={`flex my-4`}>
              <div className={`justify-start`}>Click on a letter below</div>
              <div
                className={`justify-end flex ml-auto ${
                  lives === 2 || lives === 1 || lives === 0
                    ? "text-red-500"
                    : ""
                }`}
              >
                <img src={redheart} className="w-4 h-4 my-auto mx-1" alt="" />
                Lives left : {lives}/6
              </div>
            </div>
            <div className="w-9/12 mx-auto">
              {alphabets.map((alphabet, index) => (
                <>
                  <button
                    className={`${maskedWord.includes("_") ? "" : "hidden"} ${
                      lives === 0 ? "hidden" : ""
                    } m-1 py-1 px-3 border-2 border-${dark} rounded-md hover:scale-90`}
                    onClick={() => {
                      if (wordToGuess.includes(alphabet)) {
                        navigator.vibrate(50);
                        setguessedLetters([...guessedLetters, alphabet]);
                      } else {
                        navigator.vibrate([100, 30, 30, 100, 30, 30, 100]);
                        if (lives !== 0) {
                          setlives(lives - 1);
                        }
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
            <div
              className={`${
                maskedWord.includes("_") ? "hidden" : ""
              } text-green-500`}
            >
              Congratulations !! You Won
            </div>
            <div
              className={`${
                lives === 0 || timer === 0 ? "" : "hidden"
              } text-red-500`}
            >
              Oops ! You lost
            </div>
            <div className={`${lives === 0 ? "" : "hidden"} text-${dark}`}>
              Correct answer is {wordToGuess}
            </div>
            <div
              className={`text-${dark} bg-yellow-600 inline-block mt-2 px-3 rounded-md`}
            >
              Hint: {object}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
