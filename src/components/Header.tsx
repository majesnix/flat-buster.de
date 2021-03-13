import styled from "styled-components";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IHeaderProps {
  isMobile: boolean;
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}

interface INavBarProps {
  isMobile: boolean;
}

const NavBar = styled.div<INavBarProps>`
  top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => (props.isMobile ? "32" : "64")}px;
  width: calc(100% - ${(props) => (props.isMobile ? "56" : "128")}px);
  color: #fbfbfb;
  position: fixed;
`;

const HeaderComp = styled.div<INavBarProps>`
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

const Header = (props: IHeaderProps) => {
  const showMenu = () => {
    console.log("Show? ", !props.shown);
    props.setShown(!props.shown);
  };

  return (
    <NavBar isMobile={props.isMobile}>
      <HeaderComp isMobile={props.isMobile}>
        {process.env.REACT_APP_NAME}
      </HeaderComp>
      {props.isMobile ? (
        <div>
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            color="white"
            onClick={showMenu}
          />
        </div>
      ) : (
        <Links>
          <Link to="/">Home</Link>
          <Link to="/images">Bilder</Link>
          <Link to="/videos">Videos</Link>
        </Links>
      )}
    </NavBar>
  );
};

export default Header;
