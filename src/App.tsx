import Background from "./components/Background";
import Card from "./components/Card";
import Container from "./components/Container";
import Header from "./components/Header";
import { useState } from "react";
import { HashRouter, Link } from "react-router-dom";
import Routes from "./Routes";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import WaffleMenu from "./components/WaffleMenu";

const App = () => {
  const [shown, setShown] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <Container>
      <HashRouter>
        <Background />
        <Header isMobile={isTabletOrMobile} setShown={setShown} shown={shown} />
        {isTabletOrMobile && (
          <WaffleMenu shown={shown} setShown={setShown}>
            <>
              <Link to="/">Home</Link>
              <Link to="/images">Bilder</Link>
              <Link to="/videos">Videos</Link>
            </>
          </WaffleMenu>
        )}
        <Card>
          <Routes />
        </Card>
      </HashRouter>
      <div style={{ height: "40px" }} />
      <Footer />
    </Container>
  );
};

export default App;
