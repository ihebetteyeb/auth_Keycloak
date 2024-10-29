import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useAuth from "./hooks/useAuth";
import Protect from "./components/protected";
import Publice from "./components/public";

function App() {
  const [isLogin, token, logout] = useAuth();
  return isLogin ? (
    <>
      <button onClick={logout} type="submit">
        logOut
      </button>
      <Protect token={token} />
    </>
  ) : (
    <Publice />
  );
}

export default App;

