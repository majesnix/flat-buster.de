import { Link } from "react-router-dom";
import styled from "styled-components";
import Spacer from "./Spacer";

interface ICategoryBoxProps {
  title: string;
  subText: string;
  icon: JSX.Element;
  buttonText: string;
  containerCount: number;
  linkRoute: string;
  isMobile: boolean;
  ident: string;
}

interface IContainerProps {
  $isMobile: boolean;
  $containerCount: number;
  key: string;
}

const Container = styled(Link)<IContainerProps>`
  width: ${(props) =>
    (props.$containerCount && !props.$isMobile) ? 100 / (props.$containerCount + 1) : "100"}%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 32px rgba(90, 90, 90, 0.2);

  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 3px;
`;

const Title = styled.div``;

const SubText = styled.div`
  text-align: center;
`;

const CategoryBox = (props: ICategoryBoxProps) => {
  return (
    <Container
      $containerCount={props.containerCount}
      key={props.ident}
      to={props.linkRoute}
      $isMobile={props.isMobile}
    >
      {props.icon}
      <Spacer height={32} />
      <Title>{props.title}</Title>
      <Spacer height={32} />
      <SubText>{props.subText}</SubText>
      <Spacer height={32} />
    </Container>
  );
};

export default CategoryBox;
