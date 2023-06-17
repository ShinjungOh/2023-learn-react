import { Button, FormControlLabel, Switch } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { observable } from './observerble';

function App() {
  function logger(data) {
    console.log(`${Date.now()} ${data}`);
  }

  function toastify(data) {
    toast(data, {
      position: toast.POSITION.BOTTOM_RIGHT,
      closeButton: false,
      autoClose: 2000,
    });
  }

  observable.subscribe(logger);
  observable.subscribe(toastify);

  const handleClick = () => {
    observable.notify('User Clicked Button');
  };

  const handleToggle = () => {
    observable.notify('User Clicked Toggle');
  };

  return (
    <div className='App'>
      <Button variant="contained" onClick={handleClick}>Click me!</Button>
      <FormControlLabel
        control={<Switch name='' onChange={handleToggle} />}
        label='Toggle me!'
      />
      <ToastContainer />
    </div>
  );
}

export default App;
