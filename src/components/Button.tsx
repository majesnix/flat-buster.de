import styled from "styled-components";
import { Link } from "react-router-dom";

interface IButtonProps {
  color: string;
  text: string;
  route: string;
}

const StyledLink = styled(Link)`
  background-color: ${(props) => props.color};
  border: none;
  color: white;
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

const Button = (props: IButtonProps) => {
  return (
    <StyledLink to={props.route} color={props.color}>
      {props.text}
    </StyledLink>
  );
};

export default Button;
