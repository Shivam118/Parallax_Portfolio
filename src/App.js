import React from "react";
import "./App.css";

import Passport from "./components/passport";
import Navbar from './components/navbar';
// import PassportInside from './components/passportInside';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Passport />
      </div>
      {/* <PassportInside /> */}
    </div>
  );
};

export default App;
