import {useState} from 'react';
import './App.css';
import Timer from './Timer.js';

function App() {
  
  const [timerActive, setStatus] = useState(false);
  
  
  return (
    <div className="App">
      <header className="App-header">
        
        <h1> Pomodoro Timer </h1>

        <h3>
          Settings
        </h3>

        <div>
          <Timer/>
        </div>

      
      </header>
    </div>
  );
}

export default App;
