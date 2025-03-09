import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Products from "./components/Products";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
<Route path="/Products" element={<Products />} />  
<Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
/*
//<Route path="/Products" element={<Products productData={productData} />} />

            <Route path="/product/view/:id" element={<ViewProduct />} />

            <Route path="/Search" element={<CustomerSearch mode="Mobile" />} />
            <Route path="/ProductSearch" element={<CustomerSearch mode="Desktop" />} />

            <Route path="/Customerregister" element={<AuthenticationPage mode="Register" role="Customer" />} />
            <Route path="/Customerlogin" element={<AuthenticationPage mode="Login" role="Customer" />} />
            <Route path="/Sellerregister" element={<AuthenticationPage mode="Register" role="Seller" />} />
            <Route path="/Sellerlogin" element={<AuthenticationPage mode="Login" role="Seller" />} />-
            */
