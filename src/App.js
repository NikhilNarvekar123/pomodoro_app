import {useState} from 'react';
import './styles/App.css';
import Pomodoro from './components/Pomodoro.js'
import Ivy from './components/Ivy.js'

function App() {
  
  const [timerActive, setStatus] = useState(false);
  
  
  return (
    <div className="App">
      <header className="App-header">       
        <Ivy/>
        <Pomodoro/>
      </header>
    </div>
  );
}

export default App;
