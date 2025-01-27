import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "src/pages/home";
import SignIn from "src/pages/sign-in";
import Products from "src/pages/products";
import PageNotFound from "src/pages/page-not-found";

const AppRouter: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </Router>
);

export default AppRouter;
