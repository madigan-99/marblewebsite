import logo from "./logo.svg";
import "./App.css";
import "./style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import usePageTracking from "./googleanalytics";
function App() {
  usePageTracking();
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <h1>marble.</h1>

          <em>
            <a href="https://goo.gl/maps/KFTEWJacVcTw9mg17" target="new">
              <h3>UW Quad 04/02</h3>
            </a>
          </em>
        </div>
        <div className="right-content">
          <h2>
            <a href="https://www.instagram.com/marble.chocolates" target="new">
              instagram.
            </a>
          </h2>
          <h3>
            <a href="mailto:info@marblechocolates.com">email.</a>
          </h3>
        </div>
      </div>
      <div className="full-width">
        <Link to="/presale">
          <h3>
            {" "}
            reserve your order <em>today</em>
          </h3>
        </Link>
      </div>
    </>
  );
}

function Presale() {
  return (
    <div className="google-form">
      <Link to="/" className="nav-back">
        &#x2190;
      </Link>
      <iframe
        className="order"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeRsmb_nekWdlgX1lngYhXIfoqmQZeQHUDcR79z9500oUQqmA/viewform?embedded=true"
        frameBorder="0"
        marginHeight="10"
        marginWidth="10"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default App;
