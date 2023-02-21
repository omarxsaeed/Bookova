import React from "react";
import "./App.module.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Cart from "./Components/Cart/Cart";
import Wishlist from "./Components/Wishlist/Wishlist";

function App() {
  return (
    <div>
      <Nav />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            {/* <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wishlist" element={<Wishlist />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
