import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Sponsorships from './components/Sponsorship';
// hello
function App() {
  return (
    <Router> {/* Wrap your app in the Router component */}
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>Overview</h3>
          <ul>
            {/* Use the Link component for navigation */}
            <li>
              <Link to="/sponsorships" className="App-link">Sponsorships Page HELLO</Link>
            </li>
          </ul>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* Define your application's routes */}
        <Routes>
          {/* Route for the home page (you can add your home component here) */}
          <Route path="/" element={<Home />} />
          {/* Route for the Sponsorships page */}
          <Route path="/Sponsorships" element={<Sponsorships />} />
        </Routes>
      </div>
    </Router>
  );
}

// You can define a simple Home component or use an existing one
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
}

export default App;
