import { NavLink } from 'react-router-dom';
import '../styles/components/HeaderLanding.scss';
import '../styles/components/MainLanding.scss';
import PropTypes from 'prop-types';

import Footer from './Footer';

const Landing = (props) => {
  return (
    <>
      <div className="headermain-main">
        {/* <!--header--> */}
        <header className="header-landing">
          <a href="">
            <img
              className="profile-cardslanding"
              src={props.imgHeader}
              alt="logo profile-cards"
            />
          </a>
        </header>
        {/* <!--main--> */}
        <main className="main">
          <h1 className="main__h1">Crea tu tarjeta de visita</h1>
          <p className="main__subtitle">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <div className="box">
            <span className="spanFlexText">
              <i className="fa-regular fa-object-ungroup icon-main"></i>
              <p className="box__text">Diseña</p>
            </span>
            <span className="spanFlexText">
              <i className="fa-solid fa-keyboard icon-main"></i>
              <p className="box__text">Rellena</p>
            </span>
            <span className="spanFlexText">
              <i className="fa-solid fa-share-nodes icon-main"></i>
              <p className="box__text">Comparte</p>
            </span>
          </div>
          <NavLink to="/cards" className="start">
            Comenzar
          </NavLink>
        </main>
      </div>
      {/* <!--footer--> */}
      <Footer />
    </>
  );
};

Landing.propTypes = {
  imgHeader: PropTypes.string,
};

export default Landing;
