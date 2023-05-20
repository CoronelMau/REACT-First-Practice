import "./Footer.css";

const Footer = () => {
  return <footer className="footer">
    <div className="redes">
      <a href="#">
        <img className="red" src={require('../../img/facebook.png')} alt="Facebook" />
      </a>
      <a href="#">
        <img className="red" src={require('../../img/twitter.png')} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com/m.coronel/">
        <img className="red" src={require('../../img/instagram.png')} alt="Instagram" />
      </a>
    </div>
    <img className="logo" src={require('../../img/Logo.png')} alt="org" />
    <strong>Desarrollado por Coronel</strong>
  </footer>

}

export default Footer;