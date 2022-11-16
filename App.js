import logo from './logo.svg';
import './App.css';
import Home from "./Home.js";
import Login from "./Login.js";
import Navbar from "./Navbar.js";
function App() {
  return (
    <>
      <Navbar.js />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Home.js />
      	<Login.js />
      </div>
    </>
  );
  
}
export {App}
export {Home, Login}  
