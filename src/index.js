import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//Layout Module
import LayoutContainer, { PageHeader, PageSide } from "./Layout";

/**
 * that should be work like that
 *
 * <Layout property={{
 *    desktop : {
 *      display : "flex",
 *      padding : 15
 *      margin : 0
 *    },
 *
 *    tablet : {
 *      display : "flex",
 *      padding : "no paddign",
 *      margin  : "no margin"
 *    }
 *
 *    mobile : {
 *      theme : "mobile"
 *    }
 * }}>
 *
 *    <Header property={{
 *        desktop : {
 *          sidebar : "without",
 *          dsplay : "fixed"
 *        }
 *    }}>
 *
 *    </Header>
 * </Layout>
 */
function App() {
  return (
    <LayoutContainer className="App">
      <PageHeader pHeader={{ fixed: false, bgColor: "red" }}>
        pHeader
      </PageHeader>

      <PageSide>pSide</PageSide>

      <div style={{ flexGrow: 9, minHeight: 500, border: "2px solid green" }}>
        Main
      </div>
      <div
        style={{ flex: "1 100%", minHeight: 200, border: "2px solid black" }}
      >
        pFooter
      </div>
    </LayoutContainer>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
