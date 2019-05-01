import React from "react";

/**
 * @mainPage
 *
 * this page section has also
 * mainHeader
 * mainSide
 * mainContent
 * and mainFooter
 */

//===== Main Container =========>
export const Main = ({ children, style, noPageSide, pHeader }) => {
  const mainStyle = {
    ...style,
    margin: noPageSide ? pHeader + " 0 0" : "50px 0px 0px 260px"
  };

  return <main style={mainStyle}>{children}</main>;
};

//====== Main Header ========>
export const MainHeader = ({ children }) => (
  <section className="mainHeader">{children}</section>
);

//====== Main Sidebar ========>
export const MainSide = ({ children }) => (
  <section className="mainSidebar">{children}</section>
);

//====== Main Content ========>
export const MainContent = ({ children }) => (
  <section className="mainContent">{children}</section>
);

//====== Main Footer ========>
export const MainFooter = ({ children }) => (
  <section className="mainFooter">{children}</section>
);
//<=============================End Main
