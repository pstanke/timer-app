import FormatedTime from './components/FormatedTime/FormatedTime';
import Button from './components/Button/Button';
import { useState, useEffect } from 'react';
const App = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <FormatedTime time={time} />
      <Button onClick={() => setRunning(true)}>Start</Button>
      <Button onClick={() => setRunning(false)}>Stop</Button>
      <Button onClick={() => setTime(0)}>Reset</Button>
    </div>
  );
};

export default App;
