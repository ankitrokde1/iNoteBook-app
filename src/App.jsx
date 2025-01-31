import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ msg: "", type: "" });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert({ msg: "", type: "" });
    }, 4000);
  };

  return (
    <NoteState>
      <BrowserRouter>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center vh-100">
            <button class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-grow spinner-grow-sm"
                aria-hidden="true"
              ></span>
              <span role="status"> Loading...</span>
            </button>
          </div>
        ) : (
          <>
            <Navbar />
            <Alert alert={alert} />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home showAlert={showAlert} />} />
                <Route path="/about" element={<About />} />
                <Route
                  path="/login"
                  element={<Login showAlert={showAlert} />}
                />
                <Route
                  path="/signup"
                  element={<SignUp showAlert={showAlert} />}
                />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </NoteState>
  );
}

export default App;
