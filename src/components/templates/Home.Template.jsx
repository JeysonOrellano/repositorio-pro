import React from "react";
import styled from "styled-components";
import{ Btnsave, useAuthStore } from "../../index";

export const HomeTemplate = () => {
  const{signOut}=useAuthStore();
  return (
    <Container>
      <h1>Welcome to the Home Page</h1>
      <Btnsave titulo="Cerrar sesión" bgcolor="#fff" funcion={signOut}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width:100%;
`;
