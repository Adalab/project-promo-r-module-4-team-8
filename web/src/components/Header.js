import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className="header__cards">
      <NavLink to="/">
        <img
          className="header__cards--profile"
          src={props.imgHeader}
          alt="logo profile-cards"
        />
      </NavLink>
    </header>
  );
}

Header.propTypes = {
  imgHeader: PropTypes.string,
};

export default Header;
