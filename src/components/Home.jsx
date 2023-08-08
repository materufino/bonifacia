import styled from "styled-components";
import Portada from "./Pequeños/Portada";
import About from "./About";
import Novedades from "./Pequeños/Novedades";
import Prueba from "./Pequeños/Prueba";




const Sheader = styled.header`
    width: 100%;
`

const Home = () => {
    return (<>
        <Sheader>
            <Portada />
        </Sheader >
        <About />
        <Prueba />
        <Novedades />
    </>)
}

export default Home;