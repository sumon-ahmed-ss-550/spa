import React from "react";
import Header from "../header/Header";
import { Outlet, useNavigation } from "react-router";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" && <span>Loading...</span>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
