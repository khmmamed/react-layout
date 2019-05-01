/**
 * pSide v0.0
 * @pageSide {*} param {children}
 */

import React from "react";
import Styled from "styled-components";
import { device } from "./device";

const HideSideBar = {
  display: "none"
};

const showOnAllScreen = {
  width: "100%",
  display: "block"
};

/**
 * Default style
 */
const StyledPageSide = Styled.aside`
  flexGrow: 1;
  border: 2px solid blue;
  

 @media ${device.mobileS}{
    display : block;
    position : absolute; 
    min-height: 100%;
    background-color : blue;
  }

 @media ${device.mobileL}{
   
  }

 @media ${device.laptop} {
    display : block;
    position : inherit;
    background-color : inherit;
    width : 200px;
}
`;

export const PageSide = ({ children, className }) => (
  <StyledPageSide className={className}>{children}</StyledPageSide>
);
