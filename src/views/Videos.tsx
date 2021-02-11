import ReactPlayer from "react-player";
// @ts-ignore
import one from "../assets/vid/one.mp4";
// @ts-ignore
import two from "../assets/vid/two.mp4";
// @ts-ignore
import three from "../assets/vid/three.mp4";
import React from "react";
import ItemHeader from "../components/ItemHeader";
import Spacer from "../components/Spacer";

const Videos = () => {
  return (
    <>
      <ItemHeader>Buster sucht neue "Tanke"</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer url={one} controls />
      <Spacer height={16} />
      <ItemHeader>Buster auf dcl Arm</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer url={two} controls />
      <Spacer height={16} />
      <ItemHeader>Buster spielt mit Pappe</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer url={three} controls />
    </>
  );
};

export default Videos;
