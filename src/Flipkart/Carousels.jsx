import React from 'react';
import './Carousels.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/Carousels1.jpg'
import img2 from '../assets/caro.webp'
import img3 from '../assets/caro2.webp'
export function Carousel1(){
    return(
        <>
        <div className="carouselmain">
        <Carousel className='carouselbox' data-bs-theme="dark">
      <Carousel.Item>
      {/* <button className="carouselmai"> */}
        <img className="car" src={img2} />
        {/* </button> */}
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img3} />
      </Carousel.Item>
      <Carousel.Item>
        <img className="car" src={img1} />
      </Carousel.Item>
    </Carousel>
    </div>
        </>
    )
}


// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel1 } from './Flipkart/Carousels';


// function App(){
//   return(
//     <div>
//     <Carousel1/>
//     </div>
//   )
// }
// export default App;



