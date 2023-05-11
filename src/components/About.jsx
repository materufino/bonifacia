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
    
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 20px auto;
    
   
`
const Cont1Img = styled.div`
    height: 270px;
    background-color: #e0e0e0;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin: 0px auto;
    justify-content: center;
    border-radius: 2px;
    padding: 10px;
    box-shadow: 0px 0px 5px 3px #d8d8d8;
    
   
`
const Cuadrado1 = styled.div`
    margin-top: 5%;
    border-radius: 2px;
    background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
    height: 70%;
    justify-content: center;
    width: 90%;
    box-shadow: 0px 0px 2px 1px rgba(209,209,209,1);
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
                <Parrafo>La nueva moda que está causando sensación. Bonifacia se destaca por sus productos minimalistas y detallados, perfectos para quienes buscan un estilo único y exclusivo. Descubre la nueva tendencia en moda con "Bony-Style".</Parrafo>
                <ParrafoVerMas> Ver más </ParrafoVerMas>
                <Adorno style={{ left: "-160px", transform: "rotate(120deg)", width: "250px" }} />
                <Adorno />
            </ContAbout>

            <ContImg>
                <Cont1Img style={{ width: "45%" }}>
                    <Cuadrado1 />
                    <ParrafoImagen>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis.</ParrafoImagen>
                </Cont1Img>

                <Cont1Img style={{ width: "45%" }}>
                    <Cuadrado1 />
                    <ParrafoImagen>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis.</ParrafoImagen>
                </Cont1Img>

                <Cont1Img style={{ width: "95%", marginTop: "20px" }}>
                    <Cuadrado1 />
                    <ParrafoImagen style={{ marginLeft: "3%", width: "90%" }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officiis.</ParrafoImagen>
                </Cont1Img>

            </ContImg>

        </Contenedor>

    </>)
}


export default About;





