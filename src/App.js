// Components
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Custom Components
import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";

// CSS
import "./App.css";
import "./Editor.css";

// Wallet
import {
  isWallectConnected,
  // checkIfTransactionExist,
  // connectWallet,
  // getAllTransactions,
  // signMessage,
  disconnectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";

function App() {

  // States
  const [connectedAccount, transactions] = useGlobalState("connectedAccount"),
    [show, setShow] = useState(false);

  // Readers
  useEffect(() => {
    isWallectConnected();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header disconnectWallet={disconnectWallet} />

        <Routes>
          <Route path="/session" element={<Session />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
