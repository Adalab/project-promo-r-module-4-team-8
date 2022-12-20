import { useRef } from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const inputFile = useRef();

  const fileReader = new FileReader();

  const handleFile = () => {
    const selectedFile = inputFile.current.files[0];
    if (selectedFile) {
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  fileReader.addEventListener('load', getImage);

  return (
    <div className="fill__div__boxes">
      <label className="fill__div__boxes__orange" htmlFor="img-selector">
        Añadir imagen
      </label>
      <input
        type="file"
        name="photo"
        id="img-selector"
        ref={inputFile}
        className="action__hiddenField  js__profile-upload-btn"
        onChange={handleFile}
      />
      {/*--white box*/}
      <div
        className="fill__div__boxes__empty profile__preview js__profile-preview js-input-box"
        style={{ backgroundImage: `url(${props.selectedImage})` }}
      ></div>
    </div>
  );
}

Image.propTypes = {
  handleImage: PropTypes.func.isRequired,
  dataCard: PropTypes.object.isRequired,
  selectedImage: PropTypes.string.isRequired,
};

export default Image;
