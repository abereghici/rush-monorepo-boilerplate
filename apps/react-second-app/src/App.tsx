import logo from './logo.svg';
import './App.css';

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Second React App living in a Rush monorepo
        </a>
      </header>
    </div>
  );
}

export default App;