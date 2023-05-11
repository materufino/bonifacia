import styled from "styled-components";
import Navbar from "./Pequeños/Navbar";
import Portada from "./Pequeños/Portada";
import About from "./About";




const Sheader = styled.header`
    width: 100%;
    height: 100vh;
`
const ContenedorSlider = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;

`

const Home = () => {
    return (<>
        <Sheader>

            <Navbar />

            <ContenedorSlider>
                <Portada />
            </ContenedorSlider>

        </Sheader>

        <About />



    </>)
}

export default Home;