import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import '../../Assets/fonts.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/effect-fade';
import camiseta from "../../Assets/Slider/camiseta.jpg";
import collar from "../../Assets/Slider/collar.jpg";
import collar2 from "../../Assets/Slider/collar2.jpg";
import pulcera from "../../Assets/Slider/pulcera.jpg";
import sombrero from "../../Assets/Slider/sombrero.jpg";
import zapatos from "../../Assets/Slider/zapatos.jpg";
import { useSwiper } from 'swiper/react';
import Tarjeta from "./Tarjeta";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";

const Contenedor = styled.div`
    width: 100%;
    height: 100%;
    background: rgb(195,195,195);
    background: linear-gradient(90deg, #1d1d1d 0%, #131313 100%);
`
const StyledSwiper = styled(Swiper)`
  /* Aquí puedes definir los estilos para el Swiper utilizando CSS en línea o propiedades de Styled Components */
  
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  padding:5px;
`;
const Walkthrough = () => {
    const swiper = useSwiper();
    return (
        <>
            <Contenedor className="container py-4 px-4 justify-content-center">
                <StyledSwiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        }
                    }}

                >
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: camiseta, price: 'Є 30', title: 'Camiseta' }} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: collar, price: 'Є 20', title: 'Collar' }} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: pulcera, price: 'Є 25', title: 'Brazalete' }} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: sombrero, price: 'Є 32', title: 'Sombrero' }} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: collar2, price: 'Є 18', title: 'Collar' }} />
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                        <Tarjeta data={{ imagen: zapatos, price: 'Є 39', title: 'Zapatos' }} />
                    </StyledSwiperSlide>



                </StyledSwiper>

            </Contenedor>
        </>
    );
};


export default Walkthrough;
