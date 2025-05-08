import "./App.css";
import ProductsPage from "./pages/Home/Home";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddToCart from "./pages/AddToCart/AddToCart";
import Error from "./pages/Error/Error";
// import { RootState } from "@reduxjs/toolkit/query";

function App() {
  return (
    <>
      <div className="" style={{ background: "rgb(204 229 255)" }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
