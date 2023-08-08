import styled from "styled-components";
import "../../Assets/fonts.css"


const Contenedor = styled.section`
  width: 100%;
  background-color: #6b5f5f;
  box-shadow: inset -80px -68px 100px -31px rgba(255,255,255,.1);
             
  @media (min-width:20.00em) {
   
    
  }
  @media (min-width:37.500em) {
    
    
    
  }
  @media(min-width:44rem) {
        
    
         
  }
  @media(min-width:61.93em) {
  
    
  }
`

const NovedadesTitulo = styled.h4`
  
    
    @media (min-width:20.00em) {     
  }
  @media (min-width:37.500em) {

  }
  @media(min-width:44rem) {
  }
  @media(min-width:61.93em) {

  }  
`

const Parrafo = styled.p`
    
    font-family: monospace;
   

  @media (min-width:20.00em) {     
        
  }
  @media (min-width:37.500em) {
   
    
  }
  @media(min-width:44rem) {
       
         
  }
  @media(min-width:61.93em) {
    
    
  }  
`
const Boton = styled.a`
   
    :hover{
        
    }
 
   
`
const Novedades = () => {
  return (<>
    <Contenedor>
      <NovedadesTitulo>Novedades</NovedadesTitulo>
      <Parrafo>
        Descuentos irresistibles, diseños exclusivos y talleres de moda. Sumérgete en nuestro mundo de estilo y elegancia. <br />¡Ven y vive la experiencia Bonifacia!
      </Parrafo>

      <Boton>Catálogo</Boton>


    </Contenedor>

  </>)
}

export default Novedades;