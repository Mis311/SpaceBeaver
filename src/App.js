// Components
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Custom Components
import Session from "./pages/Session";
import Dashboard from "./pages/Dashboard";
import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";

import { Canvas } from "@react-three/fiber";
import Sphere from "./components/Sphere";
import ActiveUser from "./components/ActiveUser";
import Calendar from  "./components/Calendar";
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
  const [connectedAccount, transactions] = useGlobalState("connectedAccount");
  const  [show, setShow] = useState(false);
  // Readers
  useEffect(() => {
    isWallectConnected();
  }, []);

  return (
    <>
    <div id="canvas-container">
        {show? <ActiveUser /> :null}
        
        <button onClick={()=>setShow(!show) }  className="star-button">★</button>
        {show?<Calendar/>:null}
      </div>
      <BrowserRouter>
        <Header
          disconnectWallet={disconnectWallet}
          connectedAccount={connectedAccount}
        />

        <Routes>
          <Route path="/session" element={<Session />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
        <Canvas>
          <Sphere/>
          <ambientLight
            intensity={1}
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
          />
          <pointLight position={[-10, -10, -10]} />
        </Canvas>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
