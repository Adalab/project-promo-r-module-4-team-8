import { useState } from 'react';

import '../styles/App.scss';

import callToApi from '../services/api';
import ls from '../services/localStorage';
import imgHeader from '../images/logo-awesome-profile-cards0.svg';
import Card from './Card';
import Landing from './Landing';

import { Routes, Route } from 'react-router-dom';

function App() {
  //State constants
  const [createIsOpen, setCreateIsOpen] = useState(true);
  const [shareIsOpen, setShareIsOpen] = useState(true);

  const [apiCard, setApiCard] = useState('');

  const defaultDataCard = {
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  };

  const lsInfo = ls.get('savedDataCard', defaultDataCard);

  const [dataCard, setDataCard] = useState({
    palette: lsInfo.palette,
    name: lsInfo.name,
    job: lsInfo.job,
    phone: lsInfo.phone,
    email: lsInfo.email,
    linkedin: lsInfo.linkedin,
    github: lsInfo.github,
    photo: lsInfo.photo,
  });

  //Handler functions
  const handleUpdateDataCard = (ev) => {
    setDataCard({ ...dataCard, [ev.target.name]: ev.target.value });
    ls.set('savedDataCard', { ...dataCard, [ev.target.name]: ev.target.value });
  };

  const handleReset = () => {
    setDataCard(defaultDataCard);
    ls.clear();
    setCreateIsOpen(true);
  };

  const handleCreateButton = (ev) => {
    ev.preventDefault();
    setCreateIsOpen(false);
    callToApi(dataCard).then((response) => setApiCard(response.cardURL));
  };

  const handleImage = (imageData) => {
    setDataCard({ ...dataCard, photo: imageData });
    ls.set('savedDataCard', { ...dataCard, photo: imageData });
  };

  //Render helpers
  const renderCreateCard = () => {
    const isBtnDisabled = createIsOpen === false;
    return (
      <div
        className={`share__div js-share-big-box ${
          shareIsOpen ? 'collapsed' : ''
        }`}
      >
        <div
          className={`js-create-button ${
            isBtnDisabled ? 'createbutton-of' : 'createbutton-on'
          }`}
        >
          <i className="fa-solid fa-address-card icon-id "></i>
          <button
            type="submit"
            name=""
            id=""
            className="inputSubmit"
            onClick={handleCreateButton}
            disabled={isBtnDisabled}
          >
            Crear tarjeta
          </button>
        </div>
        {/*--Change it to a button*/}

        <div
          className={`shareresultbox js-share-result-box ${
            createIsOpen ? 'collapsed' : ''
          }`}
        >
          <hr className="lineRectangle" />
          <span className="shareresultbox__text">
            La tarjeta ha sido creada:
          </span>
          <a
            href={apiCard}
            className="shareresultbox__link js-share-url"
            target="_blank"
            rel="noreferrer"
          >
            {apiCard}
          </a>
          <div className="shareresultbox__twitterbox">
            {/*--Reloads the pge because it is an empty link. it may be a button with inden with it, but it depends on the library. TO BE FOUND ON THE INTERNET. "How to share something Twitter"*/}
            <a
              href={`https://twitter.com/intent/tweet?text=¡Os%20comparto%20la%20mejor%20tarjeta%20del%20mundo!&url=${apiCard}`}
              target="_blank"
              rel="noreferrer"
              className="shareresultbox__twitterbox--twitter js-link-twitter"
            >
              <i className="fa-brands fa-twitter tweet-icon"></i>
              <span className="sharetwitter-text"> Compartir en twitter</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  //Return html
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing imgHeader={imgHeader} />} />
        <Route
          path="/cards"
          element={
            <Card
              imgHeader={imgHeader}
              handleReset={handleReset}
              dataCard={dataCard}
              handleUpdateDataCard={handleUpdateDataCard}
              renderCreateCard={renderCreateCard}
              shareIsOpen={shareIsOpen}
              setShareIsOpen={setShareIsOpen}
              handleImage={handleImage}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
