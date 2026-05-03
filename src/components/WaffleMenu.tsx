import React from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import Spacer from "./Spacer";

interface IWaffleMenuProps {
  shown: boolean;
  setShown?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

interface IWaffleMenuContainerProps {
  $shown: boolean;
}

const WaffleMenuContainer = styled.div<IWaffleMenuContainerProps>`
  width: 190px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  z-index: 10;
  box-shadow: 0px 5px 14px #0000002e;

  transform: ${(props) => (props.$shown ? "translateX(0%)" : "translateX(100%)")};
  transition: ${(props) => (props.$shown ? "0.35s" : "0.3s")};
  transition-timing-function: ${(props) => (props.$shown ? "ease-out" : "ease-in")};
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 100px;

  a {
    color: #000000;
    text-decoration: none;
  }
`;

const WaffleMenu = (props: IWaffleMenuProps) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        props.setShown!(false);
      }}
    >
      <WaffleMenuContainer $shown={props.shown}>
        <Spacer height={32} />
        <LinkContainer>{props.children}</LinkContainer>
      </WaffleMenuContainer>
    </OutsideClickHandler>
  );
};

export default WaffleMenu;
