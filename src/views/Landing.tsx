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
    buttonText: "Zu den Bildern",
    subText:
      "Bilder von Buster und seinem Leben, Welpentreffen, Tierfreunde und noch mehr.",
    linkRoute: "/images",
    icon: <FontAwesomeIcon icon={faCamera} size="3x" color="grey" />,
  },
  {
    title: "Videos",
    buttonText: "Zu den Videos",
    subText: "Einige Videos von Buster, als er ein Welpe war.",
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
        {categories.map((category, index) => (
          <CategoryBox
            title={category.title}
            subText={category.subText}
            buttonText={category.buttonText}
            containerCount={categories.length}
            icon={category.icon}
            linkRoute={category.linkRoute}
            key={`${category.title}-${index}`}
          />
        ))}
      </CategoriesWrapper>
    </Container>
  );
};

export default Landing;
