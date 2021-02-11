import styled from "styled-components";
import CategoryBox from "../components/CategoryBox";
import Spacer from "../components/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoriesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 16px;
`;

const categories = [
  {
    title: "Bilder",
    buttonText: "Click",
    subText:
      "Klick auf den unten angegebenen Link um euch Bilder von Buster anzuschauen.",
    linkRoute: "/images",
    icon: <FontAwesomeIcon icon={faCamera} size="3x" color="grey" />,
  },
  {
    title: "Videos",
    buttonText: "Click",
    subText:
      "Klick auf den unten angegebenen Link um euch Videos von Buster anzuschauen.",
    linkRoute: "/videos",
    icon: <FontAwesomeIcon icon={faVideo} size="3x" color="grey" />,
  },
];

const Landing = () => {
  return (
    <Container>
      <h1>Bilder & Videos</h1>
      <div>
        Hier könnt ihr Bilder und/oder Videos von Buster und seinen Tierfreunden
        anschauen.
      </div>
      <Spacer height={24} />
      <CategoriesWrapper>
        {categories.map((category) => (
          <CategoryBox
            title={category.title}
            subText={category.subText}
            buttonText={category.buttonText}
            containerCount={categories.length}
            icon={category.icon}
            linkRoute={category.linkRoute}
          />
        ))}
      </CategoriesWrapper>
    </Container>
  );
};

export default Landing;
