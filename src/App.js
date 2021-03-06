import logo from "./logo.svg";
import "./App.css";
import "./style.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route
          path="/presale"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSfauvMgGLDfaNw-e-g8tdidce1ag88NbxWwoCevRD88Nbknzw/viewform?embedded=true" />
          }
        />
        <Route
          path="/order"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSfauvMgGLDfaNw-e-g8tdidce1ag88NbxWwoCevRD88Nbknzw/viewform?embedded=true" />
          }
        />
        <Route
          path="/feedback"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSfWG0egJaNv0Z1MH7O7tkKkkn0AZ0OcoYD4vU83tBmEJGyTpQ/viewform?embedded=true" />
          }
        />
        <Route
          path="/seattlegrub"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSess1NkuQJV05UXVGhiSw3fFhib55t4EPqeJK21uTpx9tvdow/viewform?embedded=true" />
          }
        />
        <Route
          path="/monmon-eats"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLScFUQr-7t-rXS-8yk6oMD85iivtjxh9ku16_YTIWEtro6KbjA/viewform?embedded=true" />
          }
        />
        <Route
          path="/adventureswithgi"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSdhAEwAVmFf-C-Vpzrb5LIyetr6Gl8qhvn87q-4rKI3Zz4-EA/viewform?embedded=true" />
          }
        />
        <Route
          path="/toriimorwinery"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSfU8yR_u32Ah5rkqjp2k6xf-iZHrlkiKAZjuaiQ09l-uugPmg/viewform?embedded=true" />
          }
        />

        <Route
          path="/finnhill"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLScVUSxAoC3JY2I5iHpx4KdJr3UidGzPYstK2Er0czvMFf7HOA/viewform?embedded=true" />
          }
        />

        <Route
          path="/eleven"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSf74FV4ASs4GL6kZicaK8ou097FM5MRjLaFSIXiyV1GM1Vq4A/viewform?embedded=true" />
          }
        />

        <Route
          path="/elevenwinery"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSf74FV4ASs4GL6kZicaK8ou097FM5MRjLaFSIXiyV1GM1Vq4A/viewform?embedded=true" />
          }
        />
        <Route
          path="/aapi"
          element={
            <Presale url="https://docs.google.com/forms/d/e/1FAIpQLSfr0oydOblVYecXufAO91Eth3LfTUgXVJodmas4aUAREkcwMA/viewform?embedded=true" />
          }
        />

        {/* <Route path="/kirstie" element={<Presale />} /> */}
        <Route path="*" element={<Main />} />
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
            {/* <a href="https://goo.gl/maps/KFTEWJacVcTw9mg17" target="new"> */}
            <h3></h3>
            {/* </a> */}
          </em>
        </div>
        <div className="right-content">
          <h3>
            <a href="https://www.instagram.com/marble.chocolates" target="new">
              instagram.
            </a>
          </h3>
          <h3>
            <a href="mailto:info@marblechocolates.com">email.</a>
          </h3>
          <h3>
            <Link to="/feedback">leave a review.</Link>
          </h3>
        </div>
      </div>
      <div className="full-width">
        <Link to="/order">
          <h3> order today</h3>
        </Link>
      </div>
    </>
  );
}

function Presale(props) {
  return (
    <div className="google-form">
      <Link to="/" className="nav-back">
        &#x2190;
      </Link>
      <iframe
        className="order"
        src={props.url}
        frameBorder="0"
        marginHeight="10"
        marginWidth="10"
      >
        Loading???
      </iframe>
    </div>
  );
}

export default App;
