import React from "react";
import "../assets/css/footer.css";
import { Link } from "react-router-dom";
import { Button,Card, CardImg,NavItem,NavLink,Nav,Container, Row,Col,Tooltip } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards">
          <div className="container-lg">
            <Row>
              <Col md="12">
                <Nav className="nav-footer justify-content-end">
                  <NavItem><NavLink href="#" target="_blank">Partnership</NavLink></NavItem>
                  <NavItem><NavLink href="#"target="_blank"> Information </NavLink></NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Nav className="nav-footer justify-content-end">
                  <NavItem><NavLink href="#" target="_blank">Your company</NavLink></NavItem>
                  <NavItem><NavLink href="#"target="_blank"> Categories </NavLink></NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Nav className="nav-footer justify-content-end">
                  <NavItem><NavLink href="#" target="_blank">Shipping</NavLink></NavItem>
                  <NavItem><NavLink href="#"target="_blank"> Help Center </NavLink></NavItem>
                </Nav>
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Nav className="nav-footer justify-content-end">
                  <NavItem><NavLink href="#" target="_blank">Login</NavLink></NavItem>
                  <NavItem><NavLink href="#"target="_blank"> My Orders </NavLink></NavItem>
                </Nav>
              </Col>
            </Row>
          </div>

          <Container>
            <Row className="row-grid align-items-center my-md justify-content-start">
              <Col className="mb-1 mb-md-0" md="1">
                <Card className="card-lift--hover shadow border-0">
                  <Link to="/landing-page"><CardImg alt="..."  src={require("../assets/imgs/landing.jpg")}  /></Link>
                </Card>
              </Col>
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
                <h4 className="mb-0 font-weight-light"> Let's always communicate</h4>
              </Col>

            <col className="text-center " lg="5">
              <Row md="12">
                  <Button className="btn-icon-only rounded-circle" color="twitter" href="#">
                    <span className="btn-inner--icon"> <i class="fa-brands fa-twitter"></i> </span>
                  </Button>
                <Tooltip delay={0} target="tooltip475038074"> facebook  </Tooltip>
                <Button className="btn-icon-only rounded-circle ml-1" color="facebook"href="#">
                  <span className="btn-inner--icon"><i class="fa-brands fa-facebook"></i></span>
                </Button>
                <Tooltip delay={0} target="tooltip829810202"> google </Tooltip>
                <Button className="btn-icon-only rounded-circle ml-1"color="google" href="#" >
                  <span className="btn-inner--icon"><i class="fa-brands fa-google"></i></span>
                  </Button>
              </Row>     
            </col>

            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright"> © {new Date().getFullYear()}{" "}
                  <h4 >E-Commerce B2B </h4>
                </div>
              </Col>
              
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default Footer;
