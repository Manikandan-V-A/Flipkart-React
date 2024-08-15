import React from "react";
import './products.css'
import { Container, Row, Col } from "react-bootstrap";

export function Products(props){

    return(
        <>
        <Container fluid className="Product" >
            <Row>
            {/* <Col className="box" xs={12} sm={12} md={12} xl={12} xxl={12}>     */}
            <div className="ProductBbox">
            <a style={{textDecoration:"none"}} href="https://www.flipkart.com/search?q=grocery&sid=eat%2Cltb&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_2_na_na_na&as-pos=1&as-type=RECENT&suggestionId=grocery%7CDry+Fruit%2C+Nut+%26+Seed&requestId=4371ab97-8c43-4e33-9f06-4b4ac380d428&as-searchtext=grocery">
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.gro} />
            <p className="ProductsName">{props.groname}</p>
            </Col>
            </button>
            </a>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.mob} />
            <p className="ProductsName">{props.mobname}</p>
            </Col>
            </button>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.fas} />
            <p className="ProductsName">{props.fasname}</p>
            </Col>
            </button>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.ele} />
            <p className="ProductsName">{props.elename}</p>
            </Col>
            </button>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.fur} />
            <p className="ProductsName">{props.furname}</p>
            </Col>
            </button>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.app} />
            <p className="ProductsName">{props.appname}</p>
            </Col>
            </button>
            <button className="box">
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.tra} />
            <p className="ProductsName">{props.traname}</p>
            </Col>
            </button>
            {/* <button className="box"> */}
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.toy} />
            <p className="ProductsName">{props.toyname}</p>
            </Col>
            {/* </button> */}
            {/* <button className="box"> */}
            <Col className="box" xs={1} sm={1} md={1} xl={1} xxl={1}>
            <img className="ProductSbox"  src={props.two} />
            <p className="ProductsName">{props.twoname}</p>
            </Col>
            {/* </button> */}
            </div>
            {/* </Col> */}
            </Row>
        </Container>
        </>
    )
}
