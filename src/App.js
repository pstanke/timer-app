import FormatedTime from './components/FormatedTime/FormatedTime';
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  // const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(null);
  const start = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10)
      );
    }
  };
  const stop = () => {
    setTimer(clearInterval(timer));
  };
  const reset = () => {
    setTime(0);
    setTimer(clearInterval(timer));
  };
  useEffect(() => {
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return (
    <div>
      <FormatedTime time={time} />
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default App;
