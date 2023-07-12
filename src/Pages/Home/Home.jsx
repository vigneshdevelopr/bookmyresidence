import React from "react";
import { styled } from "styled-components";
import Base from "../../Components/Base";
import Announcement from "../../Components/Announcement";

function Home() {
  return (
    <Base>
    <Announcement />
      <Main>hey vignesh</Main>
    </Base>
  );
}

export default Home;

const Main = styled.div`
 background:linear-gradient(45deg, #0077b5, #000000, #313335, #86888a, #caccce, #00a0dc);
  height: 100vh;
`;
