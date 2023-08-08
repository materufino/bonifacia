import Navbar from "./Pequeños/Navbar";
import styled from "styled-components";
import "../Assets/fonts.css"
import { useState } from "react";


const Contenedor = styled.div`
    margin-top: 30px;
    height: 80vh;
    
`
const ContenedorSecciones = styled.div`
   display: flex;
   width: 80%;
   gap:10px;
   margin: auto;
   
`
const Titulo = styled.h2`
    font-size: 45px;
    margin-bottom: 45px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 8px;
    text-align: center;
    font-weight: 600;
    
`
const Sector1 = styled.section`
    background-color: #cccccc;
    width: 50%;
    border-radius: 10px;
    padding: 15px;

    p{
        text-align: center;
    }
    
`

const Tituloh3 = styled.h3`
    font-size:25px;
    text-align: center;
    margin-bottom: 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
`

const Options = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  margin-top: 20px;
  left: 30%;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  min-width: 120px;
  z-index: 1;
  box-shadow: 0px 0px 15px 5px rgba(0,0,0,0.1);
`;

const DropdownContainer = styled.div`
  position: relative;
  text-align: center;
  width: 50%;
  display: inline-block;
  padding: 20px;

  &:hover {
    ${Options} {
      display: block;
    }
  }

 

`;

const Category = styled.div`

  cursor: pointer;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3px;

 
`;


const OptionLink = styled.a`
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: #333;
  margin-bottom: 5px;
  padding:10px;
  :hover{
    transform: scale(1.1);
    transform: translateX(5px);
    transition: all 0.5s ease-in-out;
  }
`;

const ContenedorDropDowns = styled.div`
    display: flex;
    width: 70%;
    margin: 50px auto;
    justify-content: space-around;
    font-family: 'Montserrat', sans-serif;
    border-radius: 15px;


    .izquierda{
        box-shadow: 17px 0px 10px -16px rgba(0,0,0,0.1);
        box-shadow: 0px 14px 15px -7px rgba(0,0,0,0.1);
    }
    .derecha{
        box-shadow: -17px 0px 10px -16px rgba(0,0,0,0.1);
        box-shadow: 0px 14px 15px -7px rgba(0,0,0,0.1);
    }
   
`


const Catalogo = () => {

    const [isOpenAccesorios, setIsOpenAccesorios] = useState(false);
    const [isOpenPrendas, setIsOpenPrendas] = useState(false);

    const [filtrar, setFiltrar] = useState('');



    const toggleDropdownAccesorios = () => {
        setIsOpenAccesorios(!isOpenAccesorios);
    };

    const toggleDropdownPrendas = () => {
        setIsOpenPrendas(!isOpenPrendas);
    };

    const handleMouseEnterAccesorios = () => {
        setIsOpenAccesorios(true);
    };

    const handleMouseLeaveAccesorios = () => {
        setIsOpenAccesorios(false);
    };

    const handleMouseEnterPrendas = () => {
        setIsOpenPrendas(true);
    };

    const handleMouseLeavePrendas = () => {
        setIsOpenPrendas(false);
    };

    const setear = (filtro) => {
        setFiltrar(filtro)
    }


    return (<>
        <Navbar />
        <Contenedor>

            <ContenedorDropDowns>
                <DropdownContainer onMouseEnter={handleMouseEnterAccesorios} onMouseLeave={handleMouseLeaveAccesorios} className="izquierda">
                    <Category onClick={() => setear("accesorios")} >Accesorios</Category>
                    <Options isOpen={isOpenAccesorios}>
                        <OptionLink onClick={() => setear("pamelas")}>Pamelas</OptionLink>
                        <OptionLink onClick={() => setear("joyas")}>Joyas</OptionLink>
                        <OptionLink onClick={() => setear("sombreros")}>Sombreros</OptionLink>
                    </Options>
                </DropdownContainer>

                <DropdownContainer onMouseEnter={handleMouseEnterPrendas} onMouseLeave={handleMouseLeavePrendas} className="derecha">
                    <Category onClick={toggleDropdownPrendas} >Prendas</Category>
                    <Options isOpen={isOpenPrendas}>
                        <OptionLink onClick={() => setear("remeras")}>Remeras</OptionLink>
                        <OptionLink onClick={() => setear("camisas")}>Camisas</OptionLink>
                        <OptionLink onClick={() => setear("zapatos")}>Zapatos</OptionLink>
                    </Options>
                </DropdownContainer>
            </ContenedorDropDowns>


            {filtrar === "" && <>

                <Titulo>Novedades!</Titulo>
                <ContenedorSecciones>

                    <Sector1>
                        <Tituloh3>Lo nuevo</Tituloh3>
                        <p>Camisas con diseños exclusivos y materiales de alta calidad. ¡Eleva tu estilo con elegancia y sofisticación!</p>
                    </Sector1>

                    <Sector1>
                        <Tituloh3>Descuentos</Tituloh3>
                        <p>Durante todo este mes 10% de descuento en pamelas y zapatos</p>
                    </Sector1>

                </ContenedorSecciones>
            </>

            }
        </Contenedor>

    </>)
}

export default Catalogo;