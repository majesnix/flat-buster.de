// @ts-ignore
import image from "../assets/img/landing-bg.jpg";
import styled from "styled-components";
import Title from "./Title";
import mouse from "../assets/img/mouse.gif";

const Hero = styled.div`
  height: 90vh;
  max-height: 1000px;
  position: relative;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image});
`;

const Mouse = styled.img`
  position: absolute;
  width: 50px;
  left: 50%;
  top: 90%;
`;

const Background = () => (
  <Hero>
    <Title />
    <Mouse src={mouse} />
  </Hero>
);

export default Background;
