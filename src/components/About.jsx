import styled from "styled-components"
import "../Assets/fonts.css";
import prenda from "../Assets/prenda.jpg"
import diadema from "../Assets/diadema.jpg"

const Contenedor = styled.div`
    overflow-x: hidden;
    min-height: 350px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 95%;
    margin: 20px auto;
    box-shadow: 0px 5px 5px 5px rgba(209,209,209,1);
    padding: 10px;
    justify-content: center;
   /*  background-color: black; */

    @media (min-width:20.00em) {     
    /* background-color: red; */
    
  }
  @media (min-width:37.500em) {
    /* background-color: green; */
    
    
  }
  @media(min-width:44rem) {
        /* background-color: gray; */
    
         
  }
  @media(min-width:61.93em) {
   /*  background-color: blue; */
    
  }  
`
const ContAbout = styled.div`
    position: relative;
    width: 90%;
    text-align: center;
  @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
    
  
  }
  @media(min-width:44rem) {
       
   
    
         
  }
  @media(min-width:61.93em) {
    width: 50%;
   /*  background-color: red; */
  }  
`

const BonyStyle = styled.h4`
    font-size: 25px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 100;
    margin-top: 60px;
    margin-bottom: 30px;
    font-weight: 600;
    font-family: 'Bilbo Swash Caps', cursive;
    font-size:30px;
    letter-spacing: 4px;
     @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    
    
  }
  @media(min-width:44rem) {
       
       
    
         
  }
  @media(min-width:61.93em) {
    font-size: 30px;
  }  
`
const Parrafo = styled.p`
    margin-bottom: 20px;
    font-family: monospace;
    font-size: 1.1rem;
    font-weight: 200;
    letter-spacing: -1px;
    line-height: 20px;
     @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
  
    
  }
  @media(min-width:44rem) {
       
       
    
         
  }
  @media(min-width:61.93em) {
    width: 90%;
    margin: 0 auto;
    
  }  
`
const ParrafoVerMas = styled.a`
    /* margin-top: 20px; */
    cursor: pointer;
   font-size:18px;
   color: #818181;
   font-family: monospace;

   :hover{
    color: #b69c9c;
    
    
   }
`
const Adorno = styled.div`  
    width: 120px;
    height: 210px;
    border: 4px solid #3333;
    border-radius: 3px;
    position: absolute;
    transform: rotate(30deg);
    top: 50px;
    right: -120px;
    z-index: -10;
   
`
const ContImg = styled.div`
    background-color: #eeeeee;
    margin-top: 20px;
    width: 300px;
    height: 200px;
    border: 3px double #727575;
    border-radius: 4px;
    position: relative;
    margin-bottom: 35px;
    @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    width: 350px;
    height: 270px;
    
  }
  @media(min-width:44rem) {
       
       width: 444px;
       height: 320px;
    
         
  }
  @media(min-width:61.93em) {
    
  }  
   
`
const Cont1Img = styled.div`
    position: absolute;
    background-image: url(${prenda});
    background-color: red;
   width: 300px;
   height: 200px;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
 
   transition: transform 0.3s ease-in-out;

  :hover{
    transform: scale(1.0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: all 0.5s ;
    z-index: 10;
  }
  @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    width: 350px;
    height: 270px;
    
  }
  @media(min-width:44rem) {
       
       width: 444px;
       height: 320px;
    
         
  }
  @media(min-width:61.93em) {
    
  }  
   
`

const Cont2Img = styled.div`
    position: absolute;
 background-image: url(${diadema});
  background-color: red;
    width: 300px;
   height: 200px;
  background-size: cover;
  background-position: center;
  clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 100%, 100% 0, 100% 100%, 0 100%);
  top: 0px;
  :hover{
    transform: scale(1.0);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transition: all 0.5s ;
  }
  @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    width: 350px;
    height: 270px;
    
  }
  @media(min-width:44rem) {
       
       width: 444px;
       height: 320px;
    
         
  }
  @media(min-width:61.93em) {
    
  }  
`

const ParrafoImagen = styled.p`
    font-family: monospace;
    text-align: left;
    padding: 5px;
`

const About = () => {
    return (<>

        <Contenedor>

            <ContAbout>
                <BonyStyle>Bony - Style</BonyStyle>
                <Parrafo>La nueva moda que está causando sensación. Bonifacia se destaca por sus productos minimalistas y detallados, perfectos para quienes buscan un estilo único y exclusivo. Descubre la nueva tendencia en moda con "Bony-Style".

                </Parrafo>
                <ParrafoVerMas> Ver más </ParrafoVerMas>

                <Adorno style={{ left: "-160px", transform: "rotate(120deg)", width: "250px" }} />
                <Adorno />
            </ContAbout>



            <ContImg>
                <Cont1Img></Cont1Img>
                <Cont2Img></Cont2Img>
            </ContImg>


        </Contenedor>

    </>)
}


export default About;





