import React from "react";
import Mainbox from "./Mainbox";
import Searchbar from "./Searchbar";

const Right = () => {
  return (
    <div className="flex flex-col flex-1 h-screen overflow-hidden">
      <Searchbar />
      <Mainbox />
    </div>
  );
};

export default Right;