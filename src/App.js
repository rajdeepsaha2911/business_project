import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
// import firebase from "firebase";
// import React, { useEffect, useState } from "react";
import ForgetPassword from "./pages/ForgetPassword";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
function App() {
  // const firebaseConfig = {
  //   apiKey: "AIzaSyB7ZTDxiKXSem7QhrgpEfp7K0xrsY8mL0U",
  //   authDomain: "admin-panel-6346e.firebaseapp.com",
  //   projectId: "admin-panel-6346e",
  //   storageBucket: "admin-panel-6346e.firebasestorage.app",
  //   messagingSenderId: "362347023282",
  //   appId: "1:362347023282:web:13f263c78110e6f641f2ab",
  //   measurementId: "G-0Y1D0ZH49M",
  // };
  // const [user, setUser] = useState(null);
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
  // useEffect(() => {
  //   const unSubscriber = onAuthStateChanged(
  //     firebase.auth,
  //     () => {
  //       (currentUser) => {
  //         console.log(currentUser);
  //         setUser(currentUser);
  //       };
  //     },
  //     []
  //   );
  //   return () => {
  //     unSubscriber();
  //   };
  // });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
