import styled from "styled-components";
import Navbar from "./Navbar";
import video from "../../Assets/videoPortada.mp4"
import { useNavigate } from "react-router-dom";

const Contenedor = styled.div`
    width: 100%;
    height: 100%;
`


const VideoContenedor = styled.section`
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    
`


const Video = styled.video`
    width: 100%;
    height: 100%;
    min-height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const Pantalla = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: rgba(224, 224, 224, 0.0);
    justify-content: center;
    align-items: center;
    display: hidden;
    z-index: 1;
    transition: all .3s ease-in-out;
     :hover{
        box-shadow: inset 0px 0px 15px 0px rgba(255,255,255,1);
    }
`




const Home = () => {
    const navigate = useNavigate();

    const cambiaRuta = (path) => {

        navigate(path);
    }

    return (<>

        <Contenedor>

            <Navbar />
            <VideoContenedor>
                <Video autoPlay muted loop >
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/webm" />
                    Tu navegador no admite la etiqueta de video.
                </Video>
            </VideoContenedor>
        </Contenedor>


    </>)
}

export default Home