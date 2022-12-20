import PropTypes from 'prop-types';

function Reset(props) {
  return (
    <button
      className="reset js-reset-btn"
      type="reset"
      onClick={props.handleReset}
    >
      <p>Reset</p>
      <i className="fa-regular fa-trash-can"></i>
    </button>
  );
}
export default Reset;

Reset.propTypes = {
  handleReset: PropTypes.func.isRequired,
};
