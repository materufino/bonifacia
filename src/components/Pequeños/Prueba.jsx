import styled from "styled-components";
import Navbar from "./Navbar";
import Walkthrough from "./Slider";



const Contenedor = styled.div`
    width: 100vw;
   /*  height: 90vh; */
  
    display: flex;
    flex-direction: column;
    
`

const ContenedorPortada = styled.div`
    border: 1px solid black;
    margin: 50px auto;
    width: 85%;
    height: auto;
    background: rgb(195,195,195);
    background: linear-gradient(90deg, #1d1d1d 0%, #131313 100%);
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0px 0px 15px -1px rgba(0,0,0,1);


`

const Prueba = () => {

    return (<>
        <Contenedor>

            <ContenedorPortada>
                <Walkthrough />
            </ContenedorPortada>

        </Contenedor>


    </>)
}


export default Prueba;