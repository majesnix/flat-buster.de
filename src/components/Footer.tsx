import styled from "styled-components";

const Container = styled.div`
  height: 18px;
  width: 100%;
  display: flex;
  margin: 0 -32px;
  padding-bottom: 16px;
  justify-content: flex-end;
`;

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()}, made with &#9825; by{" "}
      <a
        href="https://dominic-classen.de"
        rel="noreferrer"
        target="_blank"
        style={{ textDecoration: "none", color: "grey", marginLeft: "4px" }}
      >
        Dominic
      </a>
    </Container>
  );
};

export default Footer;
