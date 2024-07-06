import React from "react";
import SideBar from "../Menu/SideBar";
import LogData from "../Main/LogData";

const DashboardLogData = () => {
  return (
    <>
      <div className="bg-[#F3F2F7] h-screen">
        <SideBar />
        <LogData />
      </div>
    </>
  );
};

export default DashboardLogData
