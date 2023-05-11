import React from "react";
import Layout from "../components/Layout";
import { Outlet } from "react-router-dom";
import DashHeader from "../components/DashHeader";

const Settings = () => {
  return (
    <Layout
      child={
        <div className="w-full px-[40px] pt-[30px]">
          <DashHeader />
          <Outlet />
        </div>
      }
    />
  );
};

export default Settings;
