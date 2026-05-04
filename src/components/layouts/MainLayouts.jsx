import React from "react";
import { Outlet } from "react-router";
import TopBar from "../common/TopBar";
import Navber from "../common/Navber";
import NewsLetter from "../common/NewsLetter";
import Footer from "../common/Footer";

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <Navber />
      <Outlet />
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default MainLayouts;
