import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import { firebaseApp } from "./firebase";
import { FirebaseContext } from "./context/firebase";

render(
  <>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <Router>
        <App />
      </Router>
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
