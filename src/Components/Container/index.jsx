import React from "react";

import Title from "../Title";
import { fondoClaro } from "../UI/variables";
import Account from "../Account";
import styled from "styled-components";
import List from "../List";

const StyleContainer = styled.div`
  background-color: ${ ({theme})=> theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`
const StylesContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
      flex-direction: column;
    
  }
`

const Container = () => {
  return (
    <StyleContainer>
      <Title>Smart Bank</Title>
      <StylesContent>
        <Account />
        <List/>
      </StylesContent>
    </StyleContainer>
  );
};

export default Container;
