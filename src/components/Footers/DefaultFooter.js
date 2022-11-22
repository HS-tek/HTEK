/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components
function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/hugo-suzanne-a58536a5/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/HS-tek"
                  target="_blank"
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, by{" "}
            <a
              href="https://github.com/HS-tek"
              target="_blank"
            >
              H ⸱ TEK
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
