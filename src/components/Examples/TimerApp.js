import React, { useState, useEffect } from "react";

function TimerApp() {
  const [time, setTime] = useState({
    milliseconds: 0,
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const [isRunning, setIsRunning] = useState(false); // Timer running state

  // Effect to handle the interval when the timer is running
  useEffect(() => {
    let id;

    if (isRunning) {
      id = setInterval(() => {
        setTime((prevTime) => {
          let { milliseconds, seconds, minutes, hours } = prevTime;

          // Increment milliseconds by 10 (since the interval is 100ms)
          milliseconds = (milliseconds + 1) % 100;

          // Handle rollover for milliseconds, seconds, minutes, and hours
          if (milliseconds === 0) {
            seconds = (seconds + 1) % 60;
          }

          if (seconds === 0 && milliseconds === 0) {
            minutes = (minutes + 1) % 60;
          }

          if (minutes === 0 && seconds === 0 && milliseconds === 0) {
            hours = (hours + 1) % 24;
          }

          return {
            milliseconds,
            seconds,
            minutes,
            hours,
          };
        });
      }, 10); // Update every 10 milliseconds
    }

    // Cleanup interval on unmount or when isRunning changes
    return () => clearInterval(id);
  }, [isRunning]);

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Stop the timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime({
      milliseconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
    });
  };

  return (
    <div>
      <h1>Timer</h1>
      <div>
        <p>
          {time.hours.toString().padStart(2, "0")}:
          {time.minutes.toString().padStart(2, "0")}:
          {time.seconds.toString().padStart(2, "0")}:
          {time.milliseconds.toString().padStart(2, "0")}
        </p>
      </div>
      <div>
        <button onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default TimerApp;
