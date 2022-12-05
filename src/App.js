// Components
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";

// Custom Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// CSS
import "./App.css";
import "./Editor.css";

// Wallet
import {
  isWallectConnected,
  // checkIfTransactionExist,
  // getAllTransactions,
  // getTransactions,
  signMessage,
  connectWallet,
  disconnectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";

function App() {
  // States
  const [connectedAccount] = useGlobalState("connectedAccount"),
    [userState, setUserState] = useState(true),
    [show, setShow] = useState(false);

  // Readers
  useEffect(() => {
    isWallectConnected();
  }, []);

  // Functions
  function UserState(bool) {
    setUserState(bool);
  }
  function SetShow() {
    setShow(!show);
  }

  return (
    <>
      <BrowserRouter>
        <Header
          disconnectWallet={disconnectWallet}
          connectedAccount={connectedAccount}
          connectWallet={connectWallet}
          userState={userState}
          setUserState={UserState}
        />

        <Routes>
          <Route path="/" element={<Home show={show} setShow={SetShow} />} />
          <Route
            path="/session"
            element={
              <Session
                show={show}
                setShow={SetShow}
                signMessage={signMessage}
              />
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/profile"
            element={
              <Profile
                userState={userState}
                connectedAccount={connectedAccount}
              />
            }
          ></Route>
        </Routes>

        <button className="spinning-wheel">
          <SpinWheel />
        </button>

        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
