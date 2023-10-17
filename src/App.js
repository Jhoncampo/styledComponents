import React, {useState, useEffect} from "react";

import Container from "./Components/Container";
import Header from "./Components/Header";
import GlobalStyle from "./GlobalStyle";
import { temaClaro, temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [tema, setTema] = useState( () =>{
    const temaAlmacenado = localStorage.getItem("tema")
    return temaAlmacenado ? temaAlmacenado === "true" : true
  })
  
  const toggleTema = ()=>{
    const nuevoTema = !tema 
    setTema(nuevoTema) 
    localStorage.setItem("tema", nuevoTema.toString())
  } 

  useEffect(()=>{
    localStorage.setItem("tema", tema.toString())
  }, [tema])


  return (
    <ThemeProvider theme={tema? temaClaro : temaOscuro }>
      <GlobalStyle/>
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
