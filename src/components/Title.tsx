import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 42%;
  margin-left 64px;
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
  font-family: 'Roboto Slab', 'Times New Roman', serif;
`;

const Title = () => (
  <Container>
    <Head>Willkommen auf Buster&apos;s Website!</Head>
    <h4>
      Diese Seite enthält Bilder von meinem Hund Buster. Sie gelten der
      Erinnerung an eine fantastische Zeit mit meinem besten Freund.
    </h4>
  </Container>
);

export default Title;
