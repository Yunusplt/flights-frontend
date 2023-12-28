import { Container, Row, Col } from "react-bootstrap";
import logo from "../img/logo.png";
import twitter from "../img/Twitter.png";
import instagram from "../img/instagram.png";
import facebook from "../img/Facebook.png";
import Nav from "react-bootstrap/Nav";


// function Footer() {
//   return (
//     <Container classNameName="fixed-bottom border-bottom mb-4 pb-2 ">
//       <Row>
//         <Col classNameName="col_1">
//           <img src={logo} alt="" />
//           <div>
//             <p>
//               We are Europe's first premium long-distance coach provider. We
//               have made it our mission to offer 'first-className travel at economy
//               prices'
//             </p>
//           </div>
//           <div style={{ width: "100px", height: "25px" }}>
//             <img src={twitter} alt="twitter" />
//             <img src={facebook} alt="facebook" />
//             <img src={instagram} alt="instagram" />
//           </div>
//         </Col>
//         <Col classNameName="border-start border-end col-2">
//           <div>
//             <h5>LINKS</h5>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#aboutus">About us</Nav.Link>
//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#newsroom">Newsroom</Nav.Link>
//           </div>
//         </Col>
//         <Col classNameName="col_3">
//           <h5>CONTACT</h5>
//           <Nav.Link href="mailto:info@example.com">info@form.com</Nav.Link>
//           <Nav.Link href="tel:+1234567890">882-587-3025</Nav.Link>
//           <address>6116 Willa River Suite 610</address>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Footer;

function Footer() {
  return (
      <Container className="text-center text-md-start fixed-bottom text-muted border-bottom mb-4">
        <Row>
          <Col className="col-md-5 col-lg-4 col-xl-3 ms-5">
            <img src={logo} alt="logo" />
            <p>
              We are Europe's first premium long-distance coach provider. We
              have made it our mission to offer 'first-className travel at
              economy prices'
            </p>
            <section style={{ width: "100px", height: "25px" }}>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
            </section>
          </Col>

          <Col className="col-md-2 col-lg-2 col-xl-2 mx-auto  border-start border-end text-center mt-4 mb-3">
            <h5>LINKS</h5>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#newsroom">Newsroom</Nav.Link>
          </Col>

          <Col className="col-md-4 col-lg-3 col-xl-4  mt-4 ps-2">
            <h5>CONTACT</h5>
            <Nav.Link href="mailto:info@example.com">info@form.com</Nav.Link>
            <Nav.Link href="tel:+1234567890">882-587-3025</Nav.Link>
            <address>6116 Willa River Suite 610</address>
          </Col>
        </Row>
      </Container>
  );
}
export default Footer;
