import React from "react";
import logo from "../img/logo.png"
import {Col, Row} from "react-bootstrap";
import Image from "react-bootstrap/cjs/Image";

export default class Footer extends React.Component{
    render() {
        return(
          <div className="w-100 p-4 bg-peach">
              <Row className="justify-content-md-center mt-5">
                  <Col md="auto">
                      <Image width="300px" src={logo}/>
                  </Col>
              </Row>
          </div>
        );
    }
}