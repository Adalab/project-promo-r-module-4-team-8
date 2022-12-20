import PropTypes from 'prop-types';

function Palettes(props) {
  return (
    <div
      className={`design__palette js-design-big-box ${
        props.designIsOpen ? 'collapsed' : ''
      }`}
    >
      <p className="design__palette__p"> Colores</p>
      <div className="design__palette__box design__palette__box--1">
        <input
          className="design__palette__box--selector js-palette-one"
          type="radio"
          value="1"
          name="palette"
          checked={props.dataCard.palette === '1'}
          onChange={props.handleUpdateDataCard}
        />
        <div className="design__palette__box--1left minibox"></div>
        <div className="design__palette__box--1middle minibox"></div>
        <div className="design__palette__box--1right minibox"></div>
      </div>
      <div className="design__palette__box design__palette__box--2">
        <input
          className="design__palette__box--selector js-palette-two"
          type="radio"
          value="2"
          name="palette"
          checked={props.dataCard.palette === '2'}
          onChange={props.handleUpdateDataCard}
        />
        <div className="design__palette__box--2left  minibox"></div>
        <div className="design__palette__box--2middle minibox"></div>
        <div className="design__palette__box--2right minibox"></div>
      </div>
      <div className="design__palette__box design__palette__box--3">
        <input
          className="design__palette__box--selector js-palette-three"
          type="radio"
          value="3"
          name="palette"
          checked={props.dataCard.palette === '3'}
          onChange={props.handleUpdateDataCard}
        />
        <div className="design__palette__box--3left minibox"></div>
        <div className="design__palette__box--3middle minibox"></div>
        <div className="design__palette__box--3right minibox"></div>
      </div>
    </div>
  );
}

Palettes.propTypes = {
  designIsOpen: PropTypes.bool,
  dataCard: PropTypes.object.isRequired,
  handleUpdateDataCard: PropTypes.func.isRequired,
};

export default Palettes;
