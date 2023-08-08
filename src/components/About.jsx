import styled from "styled-components"
import "../Assets/fonts.css";
import fondo from "../Assets/micro_carbon.png"

const Contenedor = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
       
`
const ContAbout = styled.div`
   color: #ffc0cb;
   padding: 20px;
   
    width: 100%;
    padding: 35px;
    background: rgb(195,195,195);
    background: linear-gradient(90deg, #1d1d1d 0%, #131313 100%);
    
   @media (min-width:20.00em) {
    margin-top: -4%;
    clip-path: polygon(0 0, 100% 2%, 100% 100%, 0% 100%);

  }
  @media (min-width:37.500em) {
    clip-path: polygon(0 0, 100% 6%, 100% 100%, 0% 100%);
    
  }
  @media(min-width:56rem) {
    padding: 0px;
    

  }
  @media(min-width:61.93em) {

  }

`

const BonyStyle = styled.h4`
    text-align: center;
    font-family: 'Ephesis', cursive;
    font-size: 50px;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 2px;
  @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    
    
  }
  @media(min-width:44rem) {
       
       
    
         
  }
  @media(min-width:61.93em) {

  }  
`


const Parrafo = styled.p`
  width: 80%;
  margin: 0 auto;
  color: white;
  text-align: center;
  font-family: 'Cutive Mono', monospace;
  font-size: 1.1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 25px;
  @media (min-width:20.00em) {  
    margin-top:2.5rem ;
    width:95%;
        
  }
  @media (min-width:37.500em) {
   width: 80%;
  
    
  }
  @media(min-width:44rem) {
       
       
    
         
  }
  @media(min-width:61.93em) {
   
  }  
`

const ParrafoVerMas = styled.a`
  display: inline-block;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: 'Cutive Mono', monospace;
  text-transform: uppercase;
  text-align: center;
  color: white;
  cursor: pointer;
  :hover{
    color: gray;
    transition: all .2s ease-in-out;
    transform: scale(1);
    letter-spacing: 1px;

  }
`
const ContenedorMuestra = styled.div`
 
  
  @media (min-width:20.00em) {
  
  }
  @media (min-width:37.500em) {
    
  }
  @media(min-width:56rem) {
    
    

  }
  @media(min-width:61.93em) {

  }
`

const Span = styled.span`
  font-weight: 800;
  font-size: 1.2rem;
 
  
`

const About = () => {
  return (<>

    <Contenedor>

      <ContAbout>
        <BonyStyle>Bony - Style</BonyStyle>
        <Parrafo>La nueva moda que está causando sensación. <Span> Bonifacia</Span> se destaca por sus productos minimalistas y detallados, perfectos para quienes buscan un estilo único y exclusivo. Descubre la nueva tendencia en moda con <br /> "Bony-Style".
        </Parrafo>
        <ParrafoVerMas> Ver más </ParrafoVerMas>
      </ContAbout>



    </Contenedor>

  </>)
}


export default About;





