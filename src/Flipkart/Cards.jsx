import React from 'react'
import './Cards.css'
export function Cards1(props) {
  return (
    // <a href="https://www.youtube.com/watch?v=lCSJ3LsKeqo">  
    <a href="https://www.flipkart.com/search?q=iphone+15+pro+max&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_1_1_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_1_1_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=iphone+15+pro+max&requestId=8b53f083-8572-45ec-a4db-ee563826a220&as-searchtext=i">
    
    <button className='Cardmain'>
    <div className='Cardimg'>
    <img className='Productimg' src={props.a}></img>
    </div>
    <div className='details'>
    <h1 className='descriptions'>{props.b}</h1>
    <h1 className='price'>Form {props.c}</h1>
    </div>
    </button>
</a>
  )
}






//     <Container fluid className='a2'>

//       <Row className='a3'>
//       <div className=''>
//     <Col className='a1' xs={12} sm={12} md={12} xl={12} xxl={12}>
//     <Cards1 a={Tws} b="True Wireless Earbuds" c="₹1999"/>
//     <Cards1 a={Wat} b="Dhanush" c="Dhanush"/>
//     <Cards1 a={Spe} b="Dhanush" c="Dhanush"/>
//     <Cards1 a={Cam} b="Dhanush" c="Dhanush"/>
//     <Cards1 a={Pri} b="Dhanush" c="Dhanush"/>
//     <Cards1 a={Mon} b="Dhanush" c="Dhanush"/>
//     </Col>
//     </div>
//     </Row>
//     </Container>
//     </>
//   ) 
// }

// export default App







// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Header } from './Flipkart/header';
// import { Products } from './Flipkart/products';
// import { Carousel1 } from './Flipkart/Carousels';
// import Productsimg from '../src/assets/Grocery.png'
// import Productsimg1 from '../src/assets/Apple-iPhone.png'
// import Productsimg2 from '../src/assets/models.png'
// import Productsimg3 from '../src/assets/ele.png'
// import Productsimg4 from '../src/assets/fur.png'
// import Productsimg5 from '../src/assets/aplain.png'
// import Productsimg6 from '../src/assets/travel.png'
// import Productsimg7 from '../src/assets/toy.png'
// import Productsimg8 from '../src/assets/bike.png'

// import { Cards1 } from './Flipkart/Cards';
// import Tws from './assets/tws.png'
// import Wat from './assets/watch.png'
// import Spe from './assets/speaker.png'
// import Cam from './assets/camera.png'
// import Pri from './assets/printers.png'
// import Mon from './assets/moniter.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Iph from './assets/iphone.png'
// import Sam from './assets/samsung.png'
// import Rog from './assets/rog.png'
// import Iqoo from './assets/iqoo.png'

// import Rogl from './assets/roglap.png'
// import Tuf from './assets/tuf.png'
// import Macl from './assets/mac.png'
// import Msi from './assets/msi.png'

// import Jer from './assets/jersey.png'
// import Bat from './assets/bat.png'
// import Ball from './assets/ball.png'
// import Bag from './assets/bag.png'
// import Stu from './assets/stumps.png'
// import Shoe from './assets/cricketshoes1.png'


// function App(){
//   return(
//     <div>
//     <Header/>
//     <Products gro={Productsimg} groname={"Grocery"} mob={Productsimg1} mobname={"Mobiles"} fas={Productsimg2} fasname={"Fashion"} ele={Productsimg3} elename={"Electronics"} fur={Productsimg4} furname={"Furniture"} app={Productsimg5} appname={"Appliances"} tra={Productsimg6} traname={"Travels"} toy={Productsimg7} toyname={"Toys & More"} two={Productsimg8} twoname={"Two wheelers"} />
//     <Carousel1/>
//     <div className='a3'>
//     <div className='boe'>
//     <h1 className='Font'>Best of Electronic</h1>
//     </div>
//     <div className='a2'>
//     <Cards1 a={Tws} b="True Wireless Earbuds" c="₹1,999"/>
//     <Cards1 a={Wat} b="Apple Watch" c="17,999"/>
//     <Cards1 a={Spe} b="Protable Speakers" c="1,599"/>
//     <Cards1 a={Cam} b="Sony Camera" c="57,000"/>
//     <Cards1 a={Pri} b="Hp Printers" c="7,999"/>
//     <Cards1 a={Mon} b="Curved Monitors" c="27,999"/>
//     </div>
//     </div>
//     <div className="cardmobilemain">
//     <div className="cardmobile1">
//       <div className="cardmobile2">
//       <div className='boe1'>
//     <h1 className='Font'>Best of Mobile</h1>
//     </div>
//     <Cards1 a={Iph} b="Iphone 15 pro" c="₹1,55,999"/>
//     <Cards1 a={Sam} b="Samsung S24 Ultra" c="85,999"/>
//     <Cards1 a={Rog} b="Rog 7 Ultimate" c="75,599"/>
//     <Cards1 a={Iqoo} b="Iqoo 12" c="57,599"/></div>
//       <div className="cardmobile3"></div>
//     </div>
//     </div>
//     <div className="cardmobilemain">
//     <div className="cardmobile11">
//       <div className="cardmobile22">
//       <div className='boe1'>
//     <h1 className='Font'>Best Gaming Laptop</h1>
//     </div>
//     <Cards1 a={Tuf} b="TUF Gaming Laptop" c="₹85,999"/>
//     <Cards1 a={Msi} b="MSI Gaming Laptop" c="65,999"/>
//     </div>
//     <div className="cardmobile33"></div>

//     <div className="cardmobile44">
//     <div className='boe1'>
//     <h1 className='Font'>Best All Rounder Laptop</h1>
//     </div>
//     <Cards1 a={Rogl} b="ROG Gaming Laptop" c="2,59,999"/>
//     <Cards1 a={Macl} b="MacBook Laptop" c="1,98,999"/>
//     </div>
//     </div>
//     </div>

//     <div className="cardmobilemain">
//     <div className="cardmobile1">
//       <div className="cardmobile32">
//       <div className='boe1'>
//     <h1 className='Font'>Congratulation Our Champions</h1>
//     </div>
//     <Cards1 a={Jer} b="Indian Team Jersey" c="₹559"/>
//     <Cards1 a={Bat} b="Kookaburra Bat" c="5,999"/>
//     <Cards1 a={Ball} b="Kookaburra Ball" c="1,999"/>
//     <Cards1 a={Bag} b="Cricket Full Kits" c="7,777"/>
//     <Cards1 a={Stu} b="Cricket Stupms" c="1,999"/>
//     <Cards1 a={Shoe} b="Cricket Shoes" c="7,777"/>
//     </div>
//       <div className="cardmobileind"></div>
//     </div>
//     </div>


//     </div>
//   )
// }
// export default App;





