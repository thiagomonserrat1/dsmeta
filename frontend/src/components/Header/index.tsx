import "./styles.css";
import logo from "../../assets/img/logoKonia.png";

const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Especialista em Software</h1>
        <p>Desenvolvido por</p>
        <a href="https://www.linkedin.com/in/thiagomonserrat/">
          @thiagomonserrat
        </a>
      </div>
    </header>
  );
};

export default Header;
