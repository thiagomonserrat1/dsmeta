import "./styles.css";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Lider Peças</h1>
        <p>
          Desenvolvido por
          <a href="https://www.facebook.com/liderpecascomercial/">
            @liderpecascomercial
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
