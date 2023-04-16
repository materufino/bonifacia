import styled from "styled-components";
import Navbar from "./Pequeños/Navbar";
import fondo from "../Assets/fondo.jpg"
import muestra from "../Assets/muestra.png"



const Portada = styled.div`
    background-image: url(${fondo});
    width: 100%;
    height:60vh;
    /* background-position: center;
    background-size: cover;
    position: relative; */
    z-index: 0;
    /* box-shadow: 0px 5px 15px 0px rgba(209,209,209,1); */
     background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
const Contenedor = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 95%;
    margin: auto;
    box-shadow: 0px 5px 5px 5px rgba(209,209,209,1);
    padding: 10px;
`
const ContAbout = styled.div`
    width: 50%;
    
    text-align: center;
    h3{
        font-size: 25px;
        margin-top: 20px;
        margin-bottom: 20px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 100;
    }
    p{
        text-align: left;
        line-height: 20px;
    }
`
const ContImg = styled.div`
    width: 50%;
    text-align: center;
    margin-top: -10px;
    margin-bottom: 20px;
    img{
        height: 300px;
        width: 300px;
    }
`

const Home = () => {
    return (<>
        <Navbar />
        <Portada />
        <Contenedor>
            <ContAbout>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quasi molestias consequatur nostrum ipsam labore exercitationem alias praesentium reiciendis unde rem in sequi necessitatibus. Sequi repudiandae est eum ut porro!</p>
            </ContAbout>
            <ContImg>
                <img src={muestra} />
            </ContImg>

        </Contenedor>
    </>)
}

export default Home;