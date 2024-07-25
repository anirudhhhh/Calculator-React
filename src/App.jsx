import { useEffect, useState } from "react";
import Big from "big.js";
// this is done, find another approach, keep the ui

let newNum = true;
let DotClicked = false;
let prevNumber = 0;
let prevOperator = "";

function App() {
  const [onScreenNumber, setOnScreenNumber] = useState("0");
  const [showOperator, setShowOperator] = useState("");

  function operatorClicked(operator) {
    if (operator == "+/-") {
      if (onScreenNumber !== "0") {
        if (onScreenNumber[0] !== "-") {
          setOnScreenNumber("-" + onScreenNumber);
        } else {
          setOnScreenNumber(onScreenNumber.slice(1));
        }
      }
    } else if (operator == "%") {
      setShowOperator("");
      setOnScreenNumber((Big(onScreenNumber) / 100).toString());
    } else if (operator !== "=") {
      prevNumber = Big(onScreenNumber);
      setShowOperator(operator);
      prevOperator = operator;
      newNum = true;
    } else {
      setShowOperator("");
      newNum = true;
      if (prevOperator == "+") {
        setOnScreenNumber(prevNumber.plus(onScreenNumber).toString());
      }
      if (prevOperator == "-") {
        setOnScreenNumber(prevNumber.minus(onScreenNumber).toString());
      }
      if (prevOperator == "X") {
        setOnScreenNumber(prevNumber.times(onScreenNumber).toString());
      }
      if (prevOperator == "÷") {
        setOnScreenNumber(prevNumber.div(onScreenNumber).toString());
      }
    }
  }

  function numClicked(num) {
    if (num == ".") {
      if (!DotClicked) {
        DotClicked = true;
        console.log("dot click recieve and accept");
        newNum = false;
        setOnScreenNumber(
          document.getElementById("screenAmount").innerHTML.concat(num)
        );
      }
    } else if (newNum) {
      DotClicked = false;
      if (num != 0 || (num == 0 && onScreenNumber !== "0")) {
        newNum = false;
        setOnScreenNumber(num);
      }
    } else {
      setOnScreenNumber(
        document.getElementById("screenAmount").innerHTML.concat(num)
      );
    }
  }

  return (
    <>
      <div className="bg-black p-3 w-fit h-fit ml-8 rounded-3xl" id="parent">
        <div className="grid justify-end items-end text-slate-500 w-80 h-36 font-thin ml-3 mb-2 text-4xl">
          {showOperator}
        </div>
        <div
          className="rtl inline-flex justify-end overflow-hidden bg-black text-white w-80 font-thin ml-3 text-6xl mb-2 "
          id="screenAmount"
        >
          {onScreenNumber}
        </div>
        <div>
          <button
            onClick={() => {
              setOnScreenNumber(0);
              setShowOperator("");
              newNum = true;
              prevNumber = 0;
              prevOperator = "";
              DotClicked = false;
            }}
            className="inline-flex justify-center items-center bg-slate-400 text-black font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            AC
          </button>
          <button
            onClick={() => {
              operatorClicked("+/-");
            }}
            className="inline-flex justify-center items-center bg-slate-400 text-black font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            +/-
          </button>
          <button
            onClick={() => {
              operatorClicked("%");
            }}
            className="inline-flex justify-center items-center bg-slate-400 text-black font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            %
          </button>
          <button
            onClick={() => {
              operatorClicked("÷");
            }}
            className="inline-flex justify-center items-center bg-orange-400 text-white font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            ÷
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numClicked(7);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            7
          </button>
          <button
            onClick={() => {
              numClicked(8);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            8
          </button>
          <button
            onClick={() => {
              numClicked(9);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            9
          </button>
          <button
            onClick={() => {
              operatorClicked("X");
            }}
            className="inline-flex justify-center items-center bg-orange-400 text-white font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            X
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numClicked(4);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            4
          </button>
          <button
            onClick={() => {
              numClicked(5);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            5
          </button>
          <button
            onClick={() => {
              numClicked(6);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            6
          </button>
          <button
            onClick={() => {
              operatorClicked("-");
            }}
            className="inline-flex justify-center items-center bg-orange-400 text-white font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            -
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              numClicked(1);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            1
          </button>
          <button
            onClick={() => {
              numClicked(2);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            2
          </button>
          <button
            onClick={() => {
              numClicked(3);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            3
          </button>
          <button
            onClick={() => {
              operatorClicked("+");
            }}
            className="inline-flex justify-center items-center bg-orange-400 text-white font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            +
          </button>
        </div>
        <div>
          <div
            onClick={() => {
              numClicked(0);
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 pr-32 rounded-full w-2 h-2"
          >
            0
          </div>
          <div
            onClick={() => {
              numClicked(".");
            }}
            className="inline-flex justify-center items-center bg-slate-700 text-white font-sans text-4xl m-1 p-10 rounded-full w-2 h-2"
          >
            .
          </div>
          <div
            onClick={() => {
              operatorClicked("=");
            }}
            className="inline-flex justify-center items-center bg-orange-400 text-white font-sans text-3xl m-1 p-10 rounded-full w-2 h-2"
          >
            =
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
