import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  //Enabling Dark or Light mode ==>
  const [mode, setMode] = useState("light");
  const [butnText, setButnText] = useState("Enable Light Mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setButnText("Enable Light Mode");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled!", "success")
    }
    else {
      setMode("light")
      setButnText("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success")
    }
  }
  //Enabling Alerts ==>
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} butnText={butnText} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze Below" mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
