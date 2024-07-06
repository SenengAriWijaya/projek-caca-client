import React from "react";
import SideBar from "../Menu/SideBar";
import Home from "../Main/Home";

const DashboardHome = () => {
  return (
    <>
      <div className="bg-[#F3F2F7] h-screen">
        <SideBar />
        <Home />
      </div>
    </>
  );
};

export default DashboardHome;
