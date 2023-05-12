import styled, { css } from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


const Contenedor = styled.nav`

   display: flex;
   height: 15vh;
   width: 100%;
   justify-content: space-between;
   align-items: center;
  box-shadow: 0px 2px 10px 2px rgba(209,209,209,1);
   /*  background-color: #b9b9b9;
 */
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(236,227,227,1) 52%, rgba(193,181,181,0.9472163865546218) 98%); border-bottom-right-radius:1px;
    border-bottom-left-radius:1px;


   position: relative;
    z-index: 1;
    

   ${(props) =>
    props.isActive &&
    css`
      ul {
        height: 100vh;
      }
    `}


     @media (min-width:20.00em) {     
    
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
   height:100px;
    
         
  }
  @media(min-width:61.93em) {
  
  } 


   `
const SeccionesUl = styled.ul`
    position: fixed;
    width: 100%;
    height: 0vh;
    top: 100px;
    background-color: rgba(0,0,0,.95);
    text-align: center;
    transition: all .5s;
    margin: 0;
    padding: 0;
    z-index: 10;
    @media (min-width:20.00em) {     
    
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
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
    font-size: 25px;
    color: #858585;
    margin-right: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 25%;
    background-color: rgba(247, 247, 247, 0.5);

    :hover{
        background-color: transparent;
        transition: all .3s;
    }
    @media (min-width:20.00em) {     
    margin-right: 20px;
    
  }
  @media (min-width:37.500em) {
    margin-right: 70px;
    
  }
  @media(min-width:44rem) {
    display: none;
    
         
  }
  @media(min-width:61.93em) {
  
  } 
`


const StyledLi = styled.li`
    z-index: 10;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
   display: inline-block;
   line-height:100px;
   margin:0 10px;
   transition:none;
    
         
  }
  @media(min-width:61.93em) {
    margin:0 25px;
    
  
  } 
`



const StyledLink = styled.a`
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    transition: all .3s;
    letter-spacing: 4px;


    ${props =>
    props.activo &&
    css`
      color: #3d3c3c;
      
    `}

    :hover{

        color: #3d3c3c;
    }

     @media (min-width:20.00em) {     
    
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
    /* color: #505050 ; */
   font-size:15px;
   ${props =>
    props.activo &&
    css`
      display: none;
      
    `}
   
    
    
         
  }
  @media(min-width:61.93em) {
  
  } 
`

const StyledTitulos = styled.h1`
    width: 140px;
    margin-left: 20px;
    font-size: 2.4rem;
    text-align: center;
    font-family: monospace;
  @media (min-width:20.00em) {     
    
    
  }
  @media (min-width:37.500em) {
    
    
  }
  @media(min-width:44rem) {
        margin-left: 20px;
    
         
  }
  @media(min-width:61.93em) {
    margin-left: 60px;
  }  
    
`
const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (<>
    <Contenedor isActive={isActive}>

      <StyledTitulos>bonifacia.</StyledTitulos>
      {/* <SCheck type="checkbox" id="check" /> */}
      <BarBtn className="bar-btn" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </BarBtn>
      <SeccionesUl>
        <StyledLi isActive={isActive}><StyledLink href="#" activo> Inicio </StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink href="#">About Us</StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink href="#">Catálogo</StyledLink></StyledLi>
        <StyledLi isActive={isActive}><StyledLink href="#">Talleres</StyledLink></StyledLi>
        <StyledLi isActive={isActive}> <StyledLink href="#">Contacto</StyledLink></StyledLi>
      </SeccionesUl>
    </Contenedor>

  </>)
}

export default Navbar;