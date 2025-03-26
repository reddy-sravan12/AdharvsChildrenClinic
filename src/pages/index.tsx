import useTimer from "../../hooks/timerHook";

const Home = () => {
  const { time, stopTimer, startTimer, reset } = useTimer();

  function formatTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (minutes === 59 && seconds === 60) {
      reset();
    }
    return `${minutes <= 9 ? `0${minutes}` : minutes}:${
      seconds <= 9 ? `0${seconds}` : seconds
    }`;
  }

  return (
    <div>
      {formatTime()}
      <button
        onClick={stopTimer}
        style={{ border: "1px solid red", marginRight: "10px" }}>
        stop
      </button>
      <button
        onClick={startTimer}
        style={{ border: "1px solid green", marginRight: "10px" }}>
        start
      </button>
      <button onClick={reset} style={{ border: "1px solid blue" }}>
        reset
      </button>
    </div>
  );
};

export default Home;
