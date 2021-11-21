import { HashRouter, Routes, Route } from 'react-router-dom';
//components
import Navbar from "./components/Navbar/Navbar";
// import HOME from "./views/Home/Home";
import SearchBike from './views/SearchBike/SearchBike';
import SearchLane from './views/SearchLane/SearchLane'
//css
import './App.css';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<HOME/>} exact/> */}
          <Route path="/" element={<SearchBike/>} />
          <Route path="/SearchLane" element={<SearchLane/>} />
        </Routes>
      </HashRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
