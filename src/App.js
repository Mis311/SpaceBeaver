// Components
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Custom Components
import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";
import SpinWheel from "./components/SpinWheel";
// import Footer from "./components/layout/Footer";

import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import ActiveUser from "./components/ActiveUser";
import Calendar from "./components/Calendar";
// CSS
import "./App.css";
import "./Editor.css";

// Wallet
import {
  isWallectConnected,
  // checkIfTransactionExist,
  // getAllTransactions,
  // signMessage,
  connectWallet,
  disconnectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";
import Profile from "./pages/Profile";

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

  return (
    <>
      <div id="canvas-container">
        
        {show ? <ActiveUser /> : null}

        <button onClick={() => setShow(!show)} className="star-button">
          ★
        </button>
        {show ? <Calendar /> : null}
      </div>
      <BrowserRouter>
        <Header
          disconnectWallet={disconnectWallet}
          connectedAccount={connectedAccount}
          connectWallet={connectWallet}
          userState={userState}
          setUserState={UserState}
        />

        <Routes>
          <Route path="/session" element={<Session />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route
            path="/profile"
            element={<Profile userState={userState} />}
          ></Route>
        </Routes>

          <button className="spinning-wheel"><SpinWheel /></button>
            <img className="rocket" src="../pics/rocket.png" alt="rocket"></img>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
