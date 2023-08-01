import { useRouter } from "next/router";
import React from "react";
import AdminHeader from "../Admin/AdminHeader";

const { default: Footer } = require("./Footer");
const { default: Header } = require("./Header");

const Layout = ({ children }) => {
  const router = useRouter();
  const role = router.asPath.split("/")[1] === "admin" ? "admin" : "";
  return (
    <>
      {role === "admin" ? <AdminHeader /> : <Header />}

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
