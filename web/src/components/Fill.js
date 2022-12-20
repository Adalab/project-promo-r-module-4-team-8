import '../styles/components/Fill.scss';
import Image from './Image';
import PropTypes from 'prop-types';

function Fill(props) {
  return (
    <fieldset className="fill">
      <div
        className="fill__head js-fill-head"
        id="fill"
        onClick={props.handleOpenSection}
      >
        <div className="fill__head__intro">
          <i className="fa-solid fa-keyboard box--element fill__head__intro__icon"></i>
          <legend className="fill__head__intro__title"> Rellena</legend>
        </div>
        {/*--Disappears when the menu is toggled*/}
        <i
          className={`fa-solid fa-angle-up fill__head__arrow js-fill-arrow-up ${
            props.fillIsOpen ? 'collapsed' : ''
          }`}
        ></i>
        <i
          className={`fa-solid fa-angle-down fill__head__arrow js-fill-arrow-down ${
            props.fillIsOpen ? '' : 'collapsed'
          }`}
        ></i>
      </div>

      {/*--Disappears when the menu is toggled*/}
      <div
        className={`fill__div js-fill-big-box ${
          props.fillIsOpen ? 'collapsed' : ''
        }`}
      >
        <label className="fill__div__label" htmlFor="name" id="name">
          Nombre completo
        </label>
        <input
          className="fill__div__input js-input-name"
          type="text"
          name="name"
          id="name"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.name}
          placeholder="Ej: Minion Stuart"
          required
        />
        <label className="fill__div__label" htmlFor="job" id="job">
          Puesto{' '}
        </label>
        <input
          className="fill__div__input js-input-job"
          type="text"
          name="job"
          id="job"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.job}
          placeholder="Ej: Despicable villain"
          required
        />
        <label className="fill__div__label" htmlFor="text">
          Imagen de perfil
        </label>
        {/*--orange button*/}
        {/*         <div className='fill__div__boxes'>
          <label className='fill__div__boxes__orange' htmlFor='img-selector'>
            Añadir imagen
          </label>
          <input
            type='file'
            name='photo'
            id='img-selector'
            className='action__hiddenField  js__profile-upload-btn'
          /> */}
        {/*--white box*/}
        {/*    <div className='fill__div__boxes__empty profile__preview js__profile-preview js-input-box'></div>
        </div> */}
        <Image
          handleImage={props.handleImage}
          dataCard={props.dataCard}
          selectedImage={props.selectedImage}
        />

        <label className="fill__div__label" htmlFor="email" id="email">
          Email
        </label>
        <input
          className="fill__div__input js-input-email"
          type="email"
          name="email"
          id="email"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.email}
          placeholder="Ej: minion-stuart@gmail.com"
          required
        />
        <label className="fill__div__label" htmlFor="phone" id="phone">
          Teléfono
        </label>
        <input
          className="fill__div__input js-input-phone"
          type="tel"
          name="phone"
          id="phone"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.phone}
          placeholder="Ej: 555-55-55-55"
        />
        <label className="fill__div__label" htmlFor="linkedin" id="linkedin">
          LinkedIn
        </label>
        <input
          className="fill__div__input js-input-linkedin"
          type="url"
          name="linkedin"
          id="linkedin"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.linkedin}
          placeholder="Ej: minion.stuart"
          required
        />
        <label className="fill__div__label" htmlFor="github" id="github">
          GitHub
        </label>
        <input
          className="fill__div__input js-input-github"
          type="url"
          name="github"
          id="github"
          onChange={props.handleUpdateDataCard}
          value={props.dataCard.github}
          placeholder="Ej: minionstuart"
          required
        />
      </div>
    </fieldset>
  );
}

Fill.propTypes = {
  dataCard: PropTypes.object.isRequired,
  handleUpdateDataCard: PropTypes.func.isRequired,
  fillIsOpen: PropTypes.bool,
  handleOpenSection: PropTypes.func.isRequired,
  handleImage: PropTypes.func.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default Fill;
