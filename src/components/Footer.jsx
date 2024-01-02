import logo from "../img/logo.png";
import twitter from "../img/Twitter.png";
import instagram from "../img/instagram.png";
import facebook from "../img/Facebook.png";

function Footer() {
  return (
    <footer>
      <div className="d-flex border-bottom flex-wrap flex-basis-0 mainFooter">
        <section className="sec1">
          <img src={logo} alt="logo" />
          <p>We are Europe's first premium long-distance coach provider. We have made it our mission to offer 'first-class travel at economy prices'</p>
          <div className="social">
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
          </div>
        </section>
        <section className="sec2 border-start border-end">
          <h5>LINKS</h5>
          <div>
            <a className="d-block" href="#home">Home</a>
            <a className="d-block" href="#aboutus">About us</a>
            <a className="d-block" href="#features">Features</a>
            <a className="d-block" href="#newroom">Newsroom</a>
          </div>
        </section>
        <section className="sec3">
          <h5>CONTACT</h5>
          <a className="d-block" href="mailto:info@example.com">info@form.com</a>
          <a className="d-block" href="tel:+1234567890">882-587-3025</a>
          <address>6116 Willa River Suite 610</address>
        </section>
      </div>
      <div className="footerMobile">
        <img src={logo} alt="logo" width="160px" height="97px" />
        <p>We are Europe's first premium long-distance coach provider. We have made it our mission to offer 'first-class travel at economy prices'</p>
        <hr />
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>FEATURES</li>
          <li>NEWSROOM</li>
          <li>CONTACT</li>
        </ul>
      
      </div>
    </footer>
  );
}
export default Footer;
