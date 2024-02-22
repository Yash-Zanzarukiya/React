import { useRef, useState } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }

  function resetTimeRemaining() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((preTime) => preTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} remainTime={timeRemaining} resetTimer={resetTimeRemaining}/>

      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={isTimerActive ? handleStop : handleStart}>
            {isTimerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimerActive ? "active" : ""}>
          {isTimerActive ? "Challenge is Running..." : "Timer is Inactive"}
        </p>
      </div>
    </>
  );
}
