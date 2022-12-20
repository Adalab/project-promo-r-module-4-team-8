import '../styles/components/Share.scss';
import PropTypes from 'prop-types';

function Share(props) {
  return (
    <fieldset className="share">
      {/*--Review button -submit*/}
      <div
        className="share__head js-share-head"
        id="share"
        onClick={props.handleOpenSection}
      >
        <span className="share__head__intro">
          <i className="fa-solid fa-share-nodes icon-sharebox--element share__head__intro__icon"></i>
          <legend className="share__head__intro__title">Comparte</legend>
        </span>
        <i
          className={`fa-solid fa-angle-up share__head__arrow js-share-arrow-up ${
            props.shareIsOpen ? 'collapsed' : ''
          }`}
        ></i>
        <i
          className={`fa-solid fa-angle-down share__head__arrow js-share-arrow-down ${
            props.shareIsOpen ? '' : 'collapsed'
          }`}
        ></i>
      </div>
      {/*--Change it to a button. This way it would validate the form. it does not need a submit input*/}
      {props.renderCreateCard()}
    </fieldset>
  );
}

Share.propTypes = {
  shareIsOpen: PropTypes.bool,
  handleOpenSection: PropTypes.func.isRequired,
  renderCreateCard: PropTypes.func.isRequired,
};

export default Share;
