import CounterContainer from './containers/CounterContainer';
import Todos from './components/Todos';

const App = () => {
  return (
    <>
      <CounterContainer />
      <hr />
      <Todos />
    </>
  );
};

export default App;
