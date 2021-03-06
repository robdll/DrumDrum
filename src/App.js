import logo from './resources/robdll-logo.svg';
import './App.css';
import DrumMachine from './components/DrumMachine/DrumMachine.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DrumDrum</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DrumMachine></DrumMachine>
      </div>
  );
}

export default App;
