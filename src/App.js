import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState, useEffect, createContext } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);
function App() {
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  const formMode = () => {
    setToggleForm(!toggleForm);
  };

  const userState = () => {
    const data = sessionStorage.getItem("user");
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  };

  useEffect(() => {
    userState();
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {user !== null ? (
          <>
            <Navbar setUserState={() => setUser(null)} />
          </>
        ) : (
          <>
            {toggleForm ? (
              <Login
                loggedIn={(user) => setUser(user)}
                toggle={() => formMode()}
              />
            ) : (
              <Signup toggle={() => formMode()} />
            )}
          </>
        )}
        <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
