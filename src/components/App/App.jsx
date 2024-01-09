import React, { useEffect } from "react";
import { useDispatch } from "react-redux"
import AppRoutes from "../Routes/Routes";
import { getCategories } from "../../features/categories/categoriesSlise";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>   
      <Footer />
    </div>
  );
}

export default App;
