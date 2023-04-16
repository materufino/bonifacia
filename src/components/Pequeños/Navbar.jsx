import styled from "styled-components"

const Contenedor = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
   margin: 0 auto;
   align-items: center;
   box-shadow: 0px 5px 15px 0px rgba(209,209,209,1);
   position: absolute;
   z-index: 1;
   background-color: white;
`
const Secciones = styled.ul`
   display: flex;
   flex-direction: row;
   margin: 10px;
   gap: 40px;
`
const StyledLi = styled.li`
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    letter-spacing: 5px;
`
const StyledTitulos = styled.h1`
    font-size: 50px;
    font-weight: 200;
    letter-spacing: 10px;
`
const Navbar = () => {
    return (<>
        <Contenedor>
            <Secciones>
                <StyledLi>About Us</StyledLi>
                <StyledLi>Catálogo</StyledLi>

            </Secciones>
            <Secciones>
                <StyledTitulos>bonifacia.</StyledTitulos>
            </Secciones>
            <Secciones>
                <StyledLi>Talleres</StyledLi>
                <StyledLi>Contactos</StyledLi>
            </Secciones>
        </Contenedor>

    </>)
}

export default Navbar;