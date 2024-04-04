import React, { useState, useEffect } from "react";
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsRunning(false);
            alert("Vaqt Tugadi!");
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  const formatTime = (time) => {
    return time < 10 ? time : time;
  };

  return (
    <div className="pomodoro-container">
      <h1 className="timer">
        {formatTime(minutes)}:{formatTime(seconds)}
      </h1>
      <div className="buttons">
        {!isRunning ? (
          <button className="btn" onClick={startTimer}>Boshlash</button>
        ) : (
          <button className="btn" onClick={pauseTimer}>Toxtatish</button>
        )}
        <button className="btn" onClick={resetTimer}>Qaytarish</button>
      </div>
    </div>
  );
};

export default App;