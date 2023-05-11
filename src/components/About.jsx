import styled from "styled-components"
import "../Assets/fonts.css";


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
    
`
const ContAbout = styled.div`
    position: relative;
    width: 90%;
    text-align: center;
    h3{
        font-size: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-weight: 100;
    }
    p{
        line-height: 20px;
    }
`

const BonyStyle = styled.h4`
    margin-top: 30px;
    margin-bottom: 30px;
    font-weight: 600;
    font-family: 'Bilbo Swash Caps', cursive;
    font-size:30px;
`
const Parrafo = styled.p`
    margin-bottom: 20px;
    font-family: monospace;
    font-size: 1.1rem;
    font-weight: 200;
    letter-spacing: -1px;
    
`
const ParrafoVerMas = styled.a`
    margin-top: 20px;
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
    /* background-color: red; */
    border: 4px solid #3333;
    border-radius: 3px;
    position: absolute;
    transform: rotate(30deg);
    top: 50px;
    right: -120px;
    z-index: -10;
   
`
const ContImg = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: nowrap;
   /*  position: relative; */
    text-align: center;
    margin: 0px auto;
   
`
const Cuadrado1 = styled.div`
    /* margin-top: 50px;
    border-radius: 10px;
    background-color: brown;
    height: 200px;
    width: 200px;
    box-shadow: 0px 5px 15px 0px rgba(209,209,209,1);
    :hover{
        z-index: 99;
    } */


`

const Cuadrado2 = styled.div`
    /* background-color: yellow;
    height: 190px;
    width: 190px;
    margin-top: 55px;
    margin-left: -55px;
    box-shadow: 0px 5px 15px 0px #b9c491;
    border-radius: 5px;
     :hover{
        z-index: 99;
    } */


`

const Cuadrado3 = styled.div`
    /* background-color: #979381;
    height:180px;
    border-radius: 15px;
    width:180px;
    margin-top: 60px;
    margin-left: -50px;
    box-shadow: 0px 5px 15px 0px rgba(209,209,209,1);
     :hover{
        z-index: 99;
    } */


`


const About = () => {
    return (<>

        <Contenedor>
            <ContAbout>
                <BonyStyle>Bony - Style</BonyStyle>
                <Parrafo>La nueva moda que está causando sensación. Bonifacia se destaca por sus productos minimalistas y detallados, perfectos para quienes buscan un estilo único y exclusivo. Descubre la nueva tendencia en moda con "Bony-Style".</Parrafo>
                <ParrafoVerMas> Ver más </ParrafoVerMas>
                <Adorno style={{ left: "-160px", transform: "rotate(120deg)", width: "250px" }} />
                <Adorno />
            </ContAbout>

            <ContImg>
                <Cuadrado1 />
                <Cuadrado2 />
                <Cuadrado3 />
            </ContImg>

        </Contenedor>

    </>)
}


export default About;





