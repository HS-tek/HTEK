import React from "react";
// reactstrap components
import {
 // Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              href="#"
              target="_blank"
              id="navbar-brand"
            >
              H ⸱ TEK
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="#index"
                >
                  <i className="now-ui-icons design_app"></i>
                  <p>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#footer"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <i className="now-ui-icons ui-1_email-85"></i>
                  <p>Contact</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/hugo-suzanne-a58536a5/"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">Contact</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/HS-tek"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-github-square"></i>
                  <p className="d-lg-none d-xl-none">Github</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
