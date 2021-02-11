import styled from "styled-components";

const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Landing = () => {
  return (
    <Container>
      <h1>Bilder & Videos</h1>
      <div>
        Hier könnt ihr Bilder und/oder Videos von Buster und seinen Tierfreunden
        anschauen.
      </div>
    </Container>
  );
};

export default Landing;
