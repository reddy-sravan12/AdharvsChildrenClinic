import { useEffect, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(0);
  const [clearId, setClearId] = useState<any>();

  function timer() {
    let Id = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    setClearId(Id);
  }

  function stopTimer() {
    clearInterval(clearId);
  }

  function reset() {
    clearInterval(clearId);
    setTime(0);
  }

  function startTimer() {
    timer();
  }

  useEffect(() => {
    timer();
  }, []);

  return { time, setTime, stopTimer, startTimer, reset };
};

export default useTimer;
