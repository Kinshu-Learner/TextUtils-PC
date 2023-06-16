import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      mssg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = "#fff7e4";
      document.body.style.color = "black";
      showAlert("Light Mode Was Enabled!", "success")
      document.title = 'TextUtils-Light'
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = "#14120d";
      document.body.style.color = "#f8d98b";
      showAlert("Dark Mode Was Enabled!", "success")
      document.title = 'TextUtils-Dark'
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="TextHome" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextArea mode={mode} showAlert={showAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
