import React from "react";
import { Outlet } from "react-router";
import TopBar from "../common/TopBar";
import Navber from "../common/Navber";

const MainLayouts = () => {
  return (
    <>
      <TopBar />
      <Navber />
      <Outlet />
    </>
  );
};

export default MainLayouts;
