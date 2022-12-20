import imgFooter from '../images/logo-minionlab.png';
import '../styles/components/Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p className="copy">Awesome profile-cards @2022</p>
      <img className="logo" src={imgFooter} alt="logo Adalab" />
    </footer>
  );
}
export default Footer;
