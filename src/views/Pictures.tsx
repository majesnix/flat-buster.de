import Carousel from "../components/Carousel";
import { aktuellImages, allgemeinImages, busterKleinImages, tierfreundeImages, welpentreffenImages } from "../images";
import Spacer from "../components/Spacer";
import ItemHeader from "../components/ItemHeader";

const Pictures = () => {
  return (
    <>
      <ItemHeader>Buster Aktuell</ItemHeader>
      <Spacer height={8} />
      <Carousel images={aktuellImages} />
      <Spacer height={8} />
      <ItemHeader>Buster Allgemein</ItemHeader>
      <Spacer height={8} />
      <Carousel images={allgemeinImages} />
      <Spacer height={8} />
      <ItemHeader>Buster Klein</ItemHeader>
      <Spacer height={8} />
      <Carousel images={busterKleinImages} />
      <Spacer height={8} />
      <ItemHeader>Buster's Tierfreunde</ItemHeader>
      <Spacer height={8} />
      <Carousel images={tierfreundeImages} />
      <Spacer height={8} />
      <ItemHeader>Welpentreffen</ItemHeader>
      <Spacer height={8} />
      <Carousel images={welpentreffenImages} />
    </>
  );
};

export default Pictures;
