import { useEffect, useState } from 'react';

function Timer() {
  useEffect(() => {
    const savedTitle = document.title;

    const id = setInterval(() => {
      document.title = `Now: ${new Date().getTime()}`;
    }, 100);

    return () => {
      clearInterval(id);
      document.title = savedTitle;
    };
  });

  return <p>Playing</p>;
}

export default function TimerControl() {
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <div>
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
