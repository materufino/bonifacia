import styled from "styled-components"

const Contenedor = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
   /* background-color: red; */
   margin: 0 auto;
   align-items: center;
   box-shadow: 0px 2px 15px 0px rgba(209,209,209,1);
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
`
const StyledTitulos = styled.h1`
    font-size: 50px;
    font-weight: 200;
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