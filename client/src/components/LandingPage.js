/*!

=========================================================
* BLK Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import "../assets/scss/blk-design-system-react.scss";
import "../assets/css/nucleo-icons.css";
import Carousel from "react-bootstrap/Carousel"; // react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "./ExamplesNavbar.js";
import Footer from "./Footer.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("landing-page");
  }
  render() {
    return (
      <>
        <div className="wrapper">
          <section className="section section-lg">
            <section className="section">
              <img alt="..." className="path" src={"path4.png"} />
              <Container>
                <Row className="row-grid justify-content-between">
                  <Col
                    className="mt-lg-5"
                    md="6"
                    style={{ paddingTop: "50px" }}
                  >
                    <img src={"eg-04.png"} alt=""></img>
                  </Col>
                  <Col lg="6">
                    <h1 className="text-center">Your best benefit</h1>
                    <Row className="row-grid justify-content-center">
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="tim-icons icon-money-coins" />
                          </div>
                          <h4 className="info-title">Low Commission</h4>
                          <hr className="line-primary" />
                          <p>
                            Divide details about your work into parts. Write a
                            few lines about each one. A paragraph describing a
                            feature will.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-warning">
                            <i className="tim-icons icon-chart-pie-36" />
                          </div>
                          <h4 className="info-title">High Incomes</h4>
                          <hr className="line-warning" />
                          <p>
                            Divide details about your product or agency work
                            into parts. Write a few lines about each one. A
                            paragraph describing feature will be a feature.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <h4 className="info-title">Verified People</h4>
                          <hr className="line-success" />
                          <p>
                            Divide details about your product or agency work
                            into parts. Write a few lines about each one. A
                            paragraph describing be enough.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  {/* <Col className="mt-lg-5" md="5">
                    <div className="pl-md-5">
                      <h1>
                        Large <br />
                        Achivements
                      </h1>
                      <p>
                        I should be capable of drawing a single stroke at the
                        present moment; and yet I feel that I never was a
                        greater artist than now.
                      </p>
                      <br />
                      <p>
                        When, while the lovely valley teems with vapour around
                        me, and the meridian sun strikes the upper surface of
                        the impenetrable foliage of my trees, and but a few
                        stray.
                      </p>
                      <br />
                      <a
                        className="font-weight-bold text-info mt-5"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show all{" "}
                        <i className="tim-icons icon-minimal-right text-info" />
                      </a>
                    </div>
                  </Col> */}
                </Row>

                <Row
                  className="row-grid justify-content-between"
                  style={{ marginTop: "100px" }}
                >
                  <Col md="6" style={{ marginTop: "30px" }}>
                    <div className="px-md-5">
                      <hr className="line-success" />
                      <h3>Awesome features</h3>
                      <p>
                        The design system comes with three pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <ul className="list-unstyled mt-5">
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-vector" />
                            </div>
                            <div className="ml-3">
                              <h6>Carefully crafted components</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-tap-02" />
                            </div>
                            <div className="ml-3">
                              <h6>Amazing page examples</h6>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="d-flex align-items-center">
                            <div className="icon icon-success mb-2">
                              <i className="tim-icons icon-single-02" />
                            </div>
                            <div className="ml-3">
                              <h6>Super friendly support team</h6>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </Col>

                  <Col className="mt-lg-5" md="6">
                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project1.jpg"}
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project3.jpg"}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={"project2.jpg"}
                          alt="Third slide"
                        />

                        <Carousel.Caption>
                          <h3>Third slide label</h3>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                          </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                </Row>
              </Container>
            </section>
          </section>
          <section className="section section-lg section-coins">
            <img alt="..." className="path" src={"path3.png"} />
            <Container>
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                    Choose the coin{" "}
                    <span className="text-info">that fits your needs</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"bitcoin.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"etherum.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Dark Coin</h4>
                          <span>Plan</span>
                          <hr className="line-success" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>150 messages</ListGroupItem>
                          <ListGroupItem>1000 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="success">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="4">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={"ripp.png"}
                      />
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Bright Coin</h4>
                          <span>Plan</span>
                          <hr className="line-info" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>350 messages</ListGroupItem>
                          <ListGroupItem>10K emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="info">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </div>
      </>
    );
  }
}

export default LandingPage;
