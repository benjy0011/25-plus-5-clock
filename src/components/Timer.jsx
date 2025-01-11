import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { reset, tick, toggleTimer } from "../redux/slices/clockSlice";


const Timer = () => {
  // Access state and dispatch
  const dispatch = useDispatch();
  const {
    timeLeft,
    timerLabel,
    isRunning,
  } = useSelector((state) => state.clock);

  // Local state for formatting time
  const [formattedTime, setFormattedTime] = useState("");

  // Update formatted time whenever timeLeft changes
  useEffect(() => {
    const minutes = Math.floor(timeLeft / 60); // minute conversion
    const seconds = timeLeft % 60;
    setFormattedTime(
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    );
  }, [timeLeft]);

  // Timer logic
  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
          dispatch(tick());
        }, 1000); 
      return () => clearInterval(timer); // Cleanup interval on component unmount or state change
    }
  }, [isRunning, dispatch]);

  // Start/stop timer
  const handleStartStop = () => {
    dispatch(toggleTimer());
  };

  // Reset
  const handleReset = () => {
    dispatch(reset());
    const beep = document.getElementById("beep");
    if (beep) {
      beep.pause();
      beep.currentTime = 0;
    }
  };

  return (
    <div className="timer-contianer text-center">
      <div id="timer-label" className="h4">{timerLabel}</div>
      <div id="time-left" className="display-1">{formattedTime}</div>
      <div className="controls mt-5">
        <button
          id="start_stop"
          className="btn btn-success mx-2"
          onClick={handleStartStop}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          id="reset"
          className="btn btn-danger mx-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <audio
        id="beep"
        src="https://www.soundjay.com/misc/sounds/censor-beep-7.mp3"
        preload="auto"
      />
    </div>
  )

}

export default Timer;