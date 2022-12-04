// Components
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Custom Components
import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";
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
  // signMessage,
  connectWallet,
  disconnectWallet,
} from "./shared/transaction";
import { useGlobalState } from "./store";

function App() {
  // States
  const [connectedAccount, transactions] = useGlobalState("connectedAccount");

  // Readers
  useEffect(() => {
    isWallectConnected();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header
          disconnectWallet={disconnectWallet}
          connectedAccount={connectedAccount}
          connectWallet={connectWallet}
        />

        <Routes>
          <Route path="/session" element={<Session />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
