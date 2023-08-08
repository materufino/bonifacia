import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../Assets/fonts.css"




const StyledLink = styled.a`
    text-decoration: none;
    text-shadow: 2px 2px 20px #000000;
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    font-family: 'Cutive Mono', monospace;
    transition: all .3s;
    letter-spacing: 2px;
    color: ${({ active }) => (active ? "#ffc0cb" : "white")};
    text-shadow: ${({ active }) => (active ? "text-shadow: 1px 1px 1px #FF6F20" : "")};
    cursor: pointer;
    :hover{

        color: #ffc0cb;
    }

     @media (min-width:20.00em) {
    
    
  }
  @media (min-width:37.500em) {
    
   
    
  }
  @media(min-width:56rem) {
    
    
    

  }
  @media(min-width:61.93em) {

  }
`
const StyledTitulos = styled.h1`
    white-space: nowrap;
    color: white;
    text-align: center;
    padding: 10px;
    letter-spacing: 1px;
    font-family: 'Cutive Mono', monospace;
   @media (min-width:20.00em) {     
      font-size: 1.8rem;
    
  }
   @media (min-width:25.00em) {     
     font-size: 2rem;
     margin-left: 20px;
  }

  @media (min-width:37.500em) {
    margin-left: 20px;
    
  }
  @media(min-width:44rem) {
    margin-left: 40px;
          
  }
  @media(min-width:56rem) {
    margin-left: 60px;
    font-size: 2.2rem;
  }

  @media(min-width:61.93em) {
    margin-left: 80px;
  } 
`
const Contenedor = styled.nav`
    position: absolute;
    z-index: 2;
    width:100%;
   background: rgb(195,195,195);
    background: linear-gradient(90deg, #1d1d1d 0%, #131313 100%);
    border-bottom: 1px solid rgba(78, 78, 78, 0.5);
    justify-content: space-between;
    align-items: center;
    text-align: center;
    display: flex;
    transition: all 0.5s ease-in-out;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.5);
   ${(props) =>
    props.isActive &&
    css`
      ul {
        height: 100vh;
      }
    `}
   

    @media (min-width:20.00em) {     
      height: 15vh;
      position:relative;
      background-color: #000000;
      
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
   

  }
   @media(min-width:56rem) {
     
  }
  @media(min-width:61.93em) {

  }


`
const SeccionesUl = styled.ul`
    position: fixed;
    width: 100%;
    height: 0vh;
    background-color: rgba(0,0,0,.9);
    transition: all .3s ease-in-out;
    margin: 0;
    padding: 0;
    z-index: 10;
 @media (min-width:20.00em) {     
    top: 15vh;
  }
  @media (min-width:37.500em) {
   
    
  }
  @media(min-width:44rem) {
     
  }

@media(min-width:56rem) {
   position: relative;
   height: 100px;
   top: 0;
   transition: none;
   text-align: right;
   margin-right: 10px;
   background-color: transparent;
    

  }

  @media(min-width:61.93em) {
  
  } 
   
`
const BarBtn = styled.label`
  margin-right:25px;
  color: #ffc0cb;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10%;
  :hover{
    background-color: transparent;
    transform: scale(1.2);
    transition: all .4s ease-in-out;
    border: 1px solid wheat;
  }
   
  @media (min-width:20.00em) {     
      font-size: 1.6rem;
    
  }
   @media (min-width:25.00em) {     
     margin-right:40px;
    
  }

  @media (min-width:37.500em) {
    margin-right:60px;
    
  }
  @media(min-width:44rem) {
    margin-right:80px;
          
  }
  @media(min-width:56rem) {
  display: none;       
  }

  @media(min-width:61.93em) {
    
  } 
`
const StyledLi = styled.li`
    z-index: 10;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: block;
    line-height: 30px;
    margin: 50px 0;
    transition: all .5s;
    ${(props) =>
    !props.isActive &&
    css`
            display: none;
        `
  }

  @media (min-width:20.00em) {       
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
  
    
         
  }
  @media (min-width:56rem) {
     display: inline-block;
   line-height:100px;
   margin:0 10px;
   transition:none;
    
  }
  @media(min-width:61.93em) {
    margin:0 20px;
    
  
  } 
`




const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const cambiaRuta = (path) => {
    navigate(path);
  }

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  React.useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActiveSection("inicio");
    } else if (path === "/Catalogo") {
      setActiveSection("Catalogo");
    } else if (path === "/Talleres") {
      setActiveSection("Talleres");
    } else if (path === "/Social") {
      setActiveSection("Social");
    }
  }, [location]);


  return (<>
    <Contenedor isActive={isActive}>

      <StyledTitulos> Bonifacia.</StyledTitulos>


      <BarBtn className="bar-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </BarBtn>

      <SeccionesUl>
        <StyledLi isActive={isActive}><StyledLink onClick={() => cambiaRuta('/')} active={activeSection === "inicio"} > Inicio </StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink onClick={() => cambiaRuta('/videos')} active={activeSection === "Catalogo"}>Catalogo</StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink onClick={() => cambiaRuta('/fotografias')} active={activeSection === "Talleres"}>Talleres</StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink onClick={() => cambiaRuta('/fotografias')} active={activeSection === "Talleres"}>Carrito</StyledLink></StyledLi>
        <StyledLi isActive={isActive}> <StyledLink onClick={() => cambiaRuta('/contacto')} active={activeSection === "Social"}>Social</StyledLink></StyledLi>
      </SeccionesUl>
    </Contenedor>

  </>)
}

export default Navbar;