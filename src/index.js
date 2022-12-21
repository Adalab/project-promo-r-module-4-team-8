const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { uuid } = require('uuidv4');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//Base de datos falsa
const savedCards = [];

server.post('/card', (req, res) => {
  //req body

  //COMPROBAR INFO QUE RECIBO POR BODY PARAMS
  //Si todo va mal: manda mensaje de error
  if (req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.phone === '' ||
    req.body.email === '' ||
    req.body.linkedin === '' ||
    req.body.github === '' ||
    req.body.photo == '') {

    //Respuesta si todo va mal
    const responseError = {
      error: 'Database error: ER_DATA_TOO_LONG',
      success: false
    }

    //Envío de respuesta
    res.json(responseError);
  } else {
    //Si todo corecto: creo la tarejta y envío la respuesta
    const newCard = {
     id: uuid(),
      ...req.body,
    }
    //Guardar newCard en la base de datos
    savedCards.push(newCard);
    
    //Response:respuesta si todo va bien
    const responseSuccess = {
      cardURL: `https://dev.adalab.es/card/${newCard.id}`,
      success: true,
    };

    //Envío de respuesta
    res.json(responseSuccess)
  }
});


/* server.get('/', (req, res) => {
  res.send('holisss');
}); */

//Servidor estáticos

const staticServerPath = './src/public-react'
server.use(express.static(staticServerPath))
