import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemHeader = ({ children }: { children: React.ReactNode }) => <Header>{children}</Header>;

export default ItemHeader;
