import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import bg_image from "../public/images/background2.png";
function App() {
  console.log(bg_image);
  return (
    <>
      <div className="bg-dark text-forground  min-h-screen">
        <div className="list_bgImage__Kn8OJ">
          <img src={bg_image} alt="" />
        </div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
