import styled from "styled-components";
import { Link } from "react-router-dom";

interface IHeaderProps {
  isMobile: boolean;
}

const NavBar = styled.div<IHeaderProps>`
  position: absolute;
  top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => (props.isMobile ? "32" : "64")}px;
  width: calc(100% - ${(props) => (props.isMobile ? "56" : "128")}px);
  color: #fbfbfb;
  position: fixed;
`;

const HeaderComp = styled.div<IHeaderProps>`
  fontsize: 18px;
  fontfamily: 'Roboto", "Helvetica", "Arial", sans-serif';
  fontweight: 300;
  lineheight: 30px;
  ${(props) => (props.isMobile ? "width: 130px" : "")};
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

const Header = (props: IHeaderProps) => (
  <NavBar isMobile={props.isMobile}>
    <HeaderComp isMobile={props.isMobile}>
      {process.env.REACT_APP_NAME}
    </HeaderComp>
    <Links>
      <Link to="/">Home</Link>
      <Link to="/images">Bilder</Link>
      <Link to="/videos">Videos</Link>
    </Links>
  </NavBar>
);

export default Header;
