/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
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
  );
}

export default DarkFooter;
