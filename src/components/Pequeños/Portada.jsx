import styled from "styled-components";
import fondo1 from "../../Assets/fondo.jpg"
import fondo2 from "../../Assets/portada2.jpg"
import fondo3 from "../../Assets/portada3.jpg"
import fondo4 from "../../Assets/portada4.jpg"

const ManualNavigation = styled.div`
    position: absolute;
    width: 100vw;
    bottom: 80px;
    display: flex;
    justify-content: center;
    
`



const Slider = styled.div`
    background-color: red;
    width: 100%;
    /* height: 500px; */
    height: 90vh;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
`
const Slides = styled.div`
   width: 500%;
   background-color: black;
   /* height: 500px; */
    height: 90vh;
   display: flex;
   position: absolute;
   
   input{
    display: none;
   }
   #radio1:checked ~ .first{
    margin-left: 0;
    
   }
   #radio2:checked ~ .first{
    margin-left: -20%;
    
   }
   #radio3:checked ~ .first{
    margin-left: -40%;
    
   }
   #radio4:checked ~ .first{
    margin-left: -60%;
    
   }





   #radio1:checked ~ ${ManualNavigation}  .auto-btn1{
    background-color: #07070799;
    
   }
   #radio2:checked ~ ${ManualNavigation}  .auto-btn2{
      background-color: #07070799;
    
   }
   #radio3:checked ~ ${ManualNavigation}  .auto-btn3{
      background-color: #07070799;
    
   }
   #radio4:checked ~ ${ManualNavigation}  .auto-btn4{
      background-color: #07070799;
    
   }
`

const Slide = styled.div`
   width: 20%;
   transition: 2s;
   

   
`

const Imagen = styled.img`
    width:100%;
    /* height: 500px; */
    height: 90vh;
`




const ManualButton = styled.label`
    border: 2px solid #07070799;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition:1s;
    box-shadow: 0px 0px 5px 2px #b6b6b6;

    :not(:last-child){
        margin-right: 40px;
    }

    :hover{
        background-color: #07070799;
    }
`
const AutoNavigation = styled.div`
    position: absolute;
    display: flex;
    width: 100vw;
    justify-content: center;
    bottom: 80px;

    div{
        border: 2px solid #07070799;
        padding:5px;
        border-radius: 10px;
        transition: 1s;
        :not(:last-child){
            margin-right: 40px;
        }
    }
`

const Portada = () => {

    /*  var counter = 1;
     setInterval(function () {
         document.getElementById('radio' + counter).checked = true;
         counter++;
         if (counter > 4) {
             counter = 1;
         }
     }, 5000)
 
  */

    let counter = 1;
    let intervalId;

    function startInterval() {
        intervalId = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if (counter > 4) {
                counter = 1;
            }
        }, 8000);
    }

    startInterval();

    function changeSlide() {
        clearInterval(intervalId);
        startInterval();
    }

    document.querySelectorAll('.slide').forEach(slide => {
        slide.addEventListener('click', changeSlide);
    });

    return (<>

        {/* Slider start */}
        <Slider className="slider">
            <Slides className="slides">

                {/* Radio buttons start */}
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />
                {/* Radio buttons ends */}

                {/* Slide images start */}
                <Slide className="slide first">
                    <Imagen src={fondo1} alt="pared de ladrillos" />
                </Slide>
                <Slide className="slide">
                    <Imagen src={fondo2} alt="" />
                </Slide>
                <Slide className="slide">
                    <Imagen src={fondo3} alt="" />
                </Slide>
                <Slide className="slide">
                    <Imagen src={fondo4} alt="" />
                </Slide>
                {/* Slide images end */}

                {/* Automatic navigation start */}
                <AutoNavigation className="navigation-auto">
                    <div className="auto-btn1"> </div>
                    <div className="auto-btn2"> </div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </AutoNavigation>
                {/* Automatic navigation end */}


                {/* Manual Navigation Start */}
                <ManualNavigation className="navigation-manual">
                    <ManualButton for="radio1" className="manual"></ManualButton>
                    <ManualButton for="radio2" className="manual"></ManualButton>
                    <ManualButton for="radio3" className="manual"></ManualButton>
                    <ManualButton for="radio4" className="manual"></ManualButton>
                </ManualNavigation>
                {/* Manual Navigation end */}

                -
            </Slides>
        </Slider>




        {/* Slider ends */}
    </>)

}

export default Portada;