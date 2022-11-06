import { useEffect, useState } from "react";
import { useRecord } from "../RecordContext";

const useTimer = (startTimer = 3) => {
  const { loading } = useRecord();
  const [timer, setTimer] = useState(startTimer)
  
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!loading && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, loading]);

  return timer;
};

export default useTimer;