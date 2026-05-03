import Carousel from "../components/Carousel";
import aktuellImages from "../assets/img/aktuell";
import allgemeinImages from "../assets/img/allgemein";
import busterKleinImages from "../assets/img/buster_klein";
import tierfreundeImages from "../assets/img/tierfreunde";
import welpentreffenImages from "../assets/img/welpentreffen";
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
