import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
