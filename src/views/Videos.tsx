import ReactPlayer from "react-player";
import ItemHeader from "../components/ItemHeader";
import Spacer from "../components/Spacer";

const Videos = () => {
  return (
    <>
      <ItemHeader>Buster sucht neue "Tanke"</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer src="/vid/one.mp4" controls />
      <Spacer height={16} />
      <ItemHeader>Buster auf dcl Arm</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer src="/vid/two.mp4" controls />
      <Spacer height={16} />
      <ItemHeader>Buster spielt mit Pappe</ItemHeader>
      <Spacer height={16} />
      <ReactPlayer src="/vid/three.mp4" controls />
    </>
  );
};

export default Videos;
