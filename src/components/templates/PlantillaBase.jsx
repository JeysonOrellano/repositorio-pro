import React, { useState } from "react";
import styled from "styled-components";
import {Header} from "../../index"

export const PlantillaBase = () => {
  const [state, setState] = useState(false);
  return (
    <Container>
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>

      <section className="area1">

      </section>
      <section className="area2">
        
      </section>
      <section className="main">
        
      </section>
    </Container>
  );
};

const Container = styled.div`
 height: 100vh;
 width: 100%;
 background-color: ${(props)=> props.theme.bgtotal};
 color:${({theme})=>theme.text};
 display: grid;
 padding: 15px;
 grid-template: 
 "header" 100px
 "area1" 100px
 "area2" 100px
 "main" auto;
 .header{
  grid-area: header;
  background-color: ${({theme})=>theme.bgheader};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .area1{
    grid-area: area1;
    background-color: ${({theme})=>theme.bgarea1};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .area2{
    grid-area: area2;
    background-color: ${({theme})=>theme.bgarea2};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
    grid-area: main;
    background-color: ${({theme})=>theme.bgmain};
    display: flex;
    justify-content: center;
    align-items: center;
  }
 }
`;
