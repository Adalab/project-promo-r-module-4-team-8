const express = require('express');
const cors = require('cors');

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post('/card', (req, res) => {
  //req body

  //Response
  const holis = false;

  const responseSuccess = {
    cardURL: 'https://dev.adalab.es/card/16715326611213225',
    success: true,
  };

  const responseError = {
    error: 'Database error: ER_DATA_TOO_LONG',
    success: false,
  };

  responseSuccess.success ? res.json(responseSuccess) : res.json(responseError);
});

server.get('/', (req, res) => {
  res.send('holisss');
});
