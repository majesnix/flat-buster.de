import Background from "./components/Background";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import React from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <HashRouter>
        <Background />
        <Header />
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
