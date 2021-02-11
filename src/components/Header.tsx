import styled from "styled-components";
import { Link } from "react-router-dom";

const NavBar = styled.div`
  position: absolute;
  top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  width: calc(100% - 128px);
  color: #fbfbfb;
  position: fixed;
`;

const HeaderComp = styled.div`
  fontsize: 18px;
  fontfamily: 'Roboto", "Helvetica", "Arial", sans-serif';
  fontweight: 300;
  lineheight: 30px;
`;

const Links = styled.div`
  display: flex;
  width: 180px;
  justify-content: space-between;

  a {
    color: #fbfbfb;
    text-decoration: none;
  }
`;

const Header = () => (
  <NavBar>
    <HeaderComp>{process.env.REACT_APP_NAME}</HeaderComp>
    <Links>
      <Link to="/">Home</Link>
      <Link to="/images">Bilder</Link>
      <Link to="/videos">Videos</Link>
    </Links>
  </NavBar>
);

export default Header;
