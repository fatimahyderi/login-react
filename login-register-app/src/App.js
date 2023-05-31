
import Login from './components/login/login';
import Homepage from './components/homepage/homepage';
import Register from './components/register/register';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Homepage/> */}
       <Login/>
      {/* <Register/>  */}
      {/* <Homepage/> */}
       <Login/>
      {/* <Register/>  */}
      <header className="App-header">
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
      </header>
      {/* <Homepage/> */}
       <Login/>
      {/* <Register/>  */}
      {/* <Homepage/> */}
       <Login/>
      {/* <Register/>  */}
    </div>
  );
}

export default App;
