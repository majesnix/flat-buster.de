import styled from "styled-components";
import Button from "./Button";
import Spacer from "./Spacer";

interface ICategoryBoxProps {
  title: string;
  subText: string;
  icon: JSX.Element;
  buttonText: string;
  containerCount: number;
  linkRoute: string;
  key: string;
}

interface IContainerProps {
  containerCount: number;
}

const Container = styled.div<IContainerProps>`
  width: ${(props) =>
    props.containerCount ? 100 / (props.containerCount + 1) : "100"}%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
    0 15px 32px rgba(90, 90, 90, 0.2);
`;

const Title = styled.div``;

const SubText = styled.div`
  text-align: center;
`;

const CategoryBox = (props: ICategoryBoxProps) => {
  return (
    <Container containerCount={props.containerCount} key={props.key}>
      {props.icon}
      <Spacer height={32} />
      <Title>{props.title}</Title>
      <Spacer height={32} />
      <SubText>{props.subText}</SubText>
      <Spacer height={32} />
      <Button color="blue" route={props.linkRoute} text={props.buttonText} />
    </Container>
  );
};

export default CategoryBox;
