import './App.css';
import CounterClass from './Components/CounterClass/CounterClass';
import CounterFunctional from './Components/CounterFunctional/CounterFunctional';

function App() {
  const random1 = Math.round(Math.random() * 101);
  const random2 = Math.round(Math.random() * 101);
  return (
    <div className="App">
      <div className='container left'>
        <CounterFunctional initCounter={random1} />
      </div>
      <div className='container right'>
        <CounterClass initCounter={random2} />
      </div>
    </div>
  );
}

export default App;
