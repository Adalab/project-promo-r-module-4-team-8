import Palettes from './Palettes';
import '../styles/components/Design.scss';
import PropTypes from 'prop-types';



function Design(props) {
  return (
    <fieldset className='design'>
      <div
        className='design__head js-design-head'
        id='design'
        onClick={props.handleOpenSection}
      >
        <div className='design__head__intro'>
          <i className='fa-regular fa-object-ungroup box--element design__head__intro__icon'></i>
          <legend className='design__head__intro__title'> Diseña</legend>
        </div>
        <i
          className={`fa-solid fa-angle-up design__head__arrow js-design-arrow-up ${
            props.designIsOpen ? 'collapsed' : ''
          }`}
        ></i>
        <i
          className={`fa-solid fa-angle-down design__head__arrow js-design-arrow-down ${
            props.designIsOpen ? '' : 'collapsed'
          }`}
        ></i>
      </div>

      {/*--Disappears when the menu is toggled*/}
      <Palettes
        designIsOpen={props.designIsOpen}
        dataCard={props.dataCard}
        handleUpdateDataCard={props.handleUpdateDataCard}
      />
    </fieldset>
  );
}

Design.propTypes = {
  dataCard: PropTypes.object.isRequired,
  handleUpdateDataCard: PropTypes.func.isRequired,
  designIsOpen: PropTypes.bool,
  handleOpenSection: PropTypes.func.isRequired,
};

export default Design;
