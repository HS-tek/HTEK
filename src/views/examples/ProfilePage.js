import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";

// core components
// import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";

function ProfilePage() {
  const [pills, setPills] = React.useState("2");
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  const [modal4, setModal4] = React.useState(false);
  const [modal5, setModal5] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              In my IT master degree at Epitech, I am specialised in Devops, web & mobile application development and cloud infrastructure management.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Projects</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons tech_mobile"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons tech_laptop"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>


              <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      <img
                          alt="..."
                          style={{cursor:'pointer'}}
                          className="mr-1"
                          onClick={() => setModal1(true)}
                          src={require("assets/img/screen_dog-tag.png")}
                        ></img>
                      </Col>
                      <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">App1*</h4>
                </div>
                <ModalBody>
                  <p>
                    ****** is a Health, tracking gps and map editing mobile application for iOS & Android, made
                    in Flutter, C++, Javascript, Firebase.
                    We are a team of 6, and plan of launching this app by the end of the year.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
                      <Col md="6">
                      <img
                          alt="..."
                          style={{cursor:'pointer'}}
                          className="mr-1"
                          onClick={() => setModal4(true)}
                          src={require("assets/img/screen_artemidae.png")}
                        ></img>
                      </Col>
                      <Modal isOpen={modal4} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal4(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">App2*</h4>
                </div>
                <ModalBody>
                  <p>
                    ********* is a digital art / nft creation / authentication mobile and web application. Made
                    in Flutter, java, vueJs and quasar. Its uses an electromagnetic authentication system, and offer new
                    security protocols to Art industry.
                    With a team of 5, application is planned to be launched by next 2 years.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal4(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

                    </Row>
                  </Col>
                </TabPane>


                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                      <img
                          alt="..."
                          style={{cursor:'pointer'}}
                          className="img-raised"
                          onClick={() => setModal3(true)}
                          src={require("assets/img/screen5-2.jpg")}
                        ></img>
                      </Col>
                      <Modal isOpen={modal3} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Dashboard</h4>
                </div>
                <ModalBody>
                  <p>
                    Web application made in nodeJs / ejs, calling multiple API.
                    After authentication, users can interact with various widgets (Weather, Crypto, Calendar, Reddit, Google Maps).
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
                      <Col md="6">
                      <img
                          alt="..."
                          style={{cursor:'pointer'}}
                          className="img-raised"
                          onClick={() => setModal2(true)}
                          src={require("assets/img/screen6-2.jpg")}
                        ></img>
                      </Col>
                      <Modal isOpen={modal2} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">App Art *</h4>
                </div>
                <ModalBody>
                  <p>
                    Web application made in Vue js, quasar and javascript. Users can
                    authenticate using Metamask and Trustwallet.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

                      <Col md="6">
                      <img
                          alt="..."
                          style={{cursor:'pointer'}}
                          className="img-raised"
                          onClick={() => setModal5(true)}
                          src={require("assets/img/BCP_cloud.gif")}
                        ></img>
                      </Col>
                      <Modal isOpen={modal5} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal5(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">BCP</h4>
                </div>
                <ModalBody>
                  <p>
                    Web application using javascript, AWS, python. Data analisys program
                    predicting probability of breast cancer.
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal5(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
