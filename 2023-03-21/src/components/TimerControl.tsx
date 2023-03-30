import { useEffect } from 'react';
import { useBoolean, useCounter } from 'usehooks-ts';

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
  const { value: playing, toggle: togglePlaying } = useBoolean();
  const { count, increment } = useCounter(0);

  // const handleClick = () => {
  //   togglePlaying();
  // };

  return (
    <div>
      {
        playing ? (
          <Timer />
        ) : (
          <p>stop</p>
        )
      }
      <button type='button' onClick={togglePlaying}>Toggle</button>
      <p>{count}</p>
      <button type='button' onClick={increment}>Increase</button>
    </div>
  );
}
