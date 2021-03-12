import Background from "./components/Background";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container>
      <HashRouter>
        <Background />
        <Header isMobile={isTabletOrMobile} />
        <Card>
          <Routes />
        </Card>
      </HashRouter>
      <div style={{ height: "40px" }} />
      <Footer />
    </Container>
  );
}

export default App;
