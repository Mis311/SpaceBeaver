// Components
import React, { useEffect, useState } from "react";
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
import Profile from "./pages/Profile";

function App() {
  // States
  const [connectedAccount] = useGlobalState("connectedAccount"),
    [userState, setUserState] = useState(true);

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

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
