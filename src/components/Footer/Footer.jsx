import "../cssFiles/footer.css";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <img src={Logo} alt="logo" />
        <div className="footerListContainer">
          <ul>
            <li className="text">
              As part of our offerings, We are bullish in developing domestic or
              household Apps that are smart and specially designed to be
              solutions to the existing problems.
            </li>
            <li>+234-812-345-6789</li>
            <li>buildeasyXZY@gmail.com</li>
          </ul>
          <ul>
            <li>About Use</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p>&copy; 2021 Buildeasy. All rights Reserved</p>
      </div>
    </div>
  );
}
