import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import React from "react";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="home">this will contain the content</div>
      </div>
    </>
  );
}
