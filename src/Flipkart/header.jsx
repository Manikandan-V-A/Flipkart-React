import React from "react";
import './header.css'
import { Navbar, Nav, NavDropdown,Button, Container, Row, Col } from "react-bootstrap";
import Image1 from "../assets/flipkart-explore-plus.png";
export function Header(){
    return(
        <>
        <header>
           <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet"></link>
        </header>
        <Container fluid className="Navbar">
            <Row className=".row">
                <Col xs={2} sm={2} md={2} xl={2} xxl={1}>
                <div className="Navbaricon">
                <a href="https://www.flipkart.com/july-2024-big-bachat-days-store?param=674">
                <img className="icon1" src={Image1}/>
                </a>
                </div>
                </Col>
                <Col xs={6} sm={6} md={6} xl={6} xxl={6}>
                <div className="NavbarSearch">
                <input className="Search" type="search" placeholder="Search for Products, Brand and More" />
                </div>
                </Col>
                <Col xs={4} sm={4} md={4} xl={4} xxl={4}>
                <div className="Navbarlogin">
                <select className="login" onchange="window.location.href = this.value;">
                    <option class="login1" value="#">Login</option>
                    <option class="nav1" value="">Admin-Login</option>
                    <option class="nav1" value="">User-Login</option>
                </select>  
                <div className="Navbarcard">
                {/* <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART">    */}
                <a href="https://www.youtube.com/watch?v=lCSJ3LsKeqo">   
                {/* <a href="https://www.youtube.com/shorts/UuOPB9dK2HU"></a> */}
                {/* <a href="http://localhost:5182/"></a> */}
                <Button className="custom-btn btn-7 cart"><span>Cart</span></Button>
                {/* <Button className="cart" >Cart</Button> */}
                </a>
                </div>
                <div className="NavbarBAS">
                <Button className="BAS" variant="primary">Become a Seller</Button>
                </div>
                </div>
                </Col>


            </Row>
        </Container>
        </>
    )
}
