import React from "react";
import styled, { keyframes } from "styled-components";
import { Logo } from "./Icons";

const Animation = keyframes`
    0%{
        opacity:0
    }
    50%{
        opacity:1
    }
    100%{
        opacity:0;
    }
`;

const Loader = styled.div`
  /* animation: ${Animation} 1s linear infinite; */
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.3;
`;

export default () => (
  <Loader>
    <Logo size={50} />
  </Loader>
);
