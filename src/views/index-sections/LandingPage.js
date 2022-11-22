import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


// core components
import DarkFooter from "components/Footers/DarkFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section section-about-us">
          <Container>
            {/*
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Projects</h2>
                <h5 className="description">
                  Web and mobile Application development iOS & Android.
                </h5>
              </Col>
            </Row>
  */ }
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg_space.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                    <small>Devops</small>
                    <br></br>
                      Flutter | React js | Node js | C | C++ | Python | HTML | CSS | Javascript | Docker <br></br>
                      <br></br>
                      <small>Cloud</small>
                      <br></br>
                      AWS | Ec2 | S3 | VM | VPC | Network | Security | Data
                    </p>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/adn_code.gif") + ")"
                    }}
                  ></div>
                  <h3>
                    Looking for interesting and innovative projects in
                  </h3>
                  <p>
                    Devops [Front-end | Network]
                  </p>
                  <p>
                    Cloud [Solutions Architect]
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Want to work with me?</h2>
            <p className="description">Please send a message</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default LandingPage;