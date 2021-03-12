import styled from "styled-components";
import CategoryBox from "../components/CategoryBox";
import Spacer from "../components/Spacer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faVideo } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

interface ICategoriesWrapperProps {
  isMobile: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CategoriesWrapper = styled.div<ICategoriesWrapperProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 16px;

  ${(props) =>
    props.isMobile
      ? `
    flex-direction: column;
    width: 90%;`
      : ""}
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
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container>
      <h1>Bilder & Videos</h1>
      <div>
        Hier könnt ihr Bilder und/oder Videos von Buster und seinen Tierfreunden
        anschauen.
      </div>
      <Spacer height={24} />
      <CategoriesWrapper isMobile={isTabletOrMobile}>
        {categories.map((category, index) => {
          return (
            <>
              <CategoryBox
                title={category.title}
                subText={category.subText}
                buttonText={category.buttonText}
                containerCount={categories.length}
                icon={category.icon}
                linkRoute={category.linkRoute}
                key={`${category.title}-${index}`}
                isMobile={isTabletOrMobile}
              />
              {isTabletOrMobile ? <Spacer height={16} /> : null}
            </>
          );
        })}
      </CategoriesWrapper>
    </Container>
  );
};

export default Landing;
