import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemHeader = (props: any) => <Header>{props.children}</Header>;

export default ItemHeader;
