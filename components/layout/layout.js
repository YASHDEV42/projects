import React from "react";
import Navigation from "./navigation";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
    </>
  );
};

export default Layout;
