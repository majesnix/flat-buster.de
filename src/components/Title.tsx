import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

interface IContainerProps {
  $isMobile: boolean;
}

const Container = styled.div<IContainerProps>`
  position: fixed;
  top: ${(props) => (props.$isMobile ? "36" : "42%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 32px;
  color: #fbfbfb;

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 576px) {
    max-width: 540px;
  }
`;

const Head = styled.h1`
  margin: 1.75rem 0 0.875rem;
  text-decoration: none;
  font-weight: 700;
  font-family: "Roboto Slab", "Times New Roman", serif;
`;

const Title = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container $isMobile={isTabletOrMobile}>
      <Head>Willkommen auf Buster&apos;s Website!</Head>
      <h4>
        Diese Seite enthält Bilder von meinem Hund Buster. Sie gelten der
        Erinnerung an eine fantastische Zeit mit meinem besten Freund.
      </h4>
    </Container>
  );
};

export default Title;
