import { useEffect, useRef, useState } from 'react';

function Timer() {
  useEffect(() => {
    const savedTitle = document.title;

    const id = setInterval(() => {
      document.title = `Now: ${new Date().getTime()}`;
    }, 100);

    return () => {
      // console.log('End of effect');
      clearInterval(id);
      document.title = savedTitle;
    };
  });

  return <p>Playing</p>;
}

export default function TimerControl() {
  const counter = useRef(1);

  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    counter.current += 1;
    // setPlaying(!playing);
  };

  useEffect(() => {
    console.log('effect');
  }, []);

  return (
    <div>
      <p>{counter.current}</p>
      {
        playing ? (
          <Timer />
        ) : (
          <p>stop</p>
        )
      }
      <button type='button' onClick={handleClick}>Toggle</button>
      <p>{count}</p>
      <button type='button' onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}