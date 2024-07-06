import React from "react";
import SideBar from "../Menu/SideBar";
import Monitoring from "../Main/Monitoring";

const DashboardMonitoring = () => {
  return (
    <>
      <div className="bg-[#F3F2F7] h-screen">
        <SideBar />
        <Monitoring />
      </div>
    </>
  );
};

export default DashboardMonitoring;
