const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { uuid } = require('uuidv4');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');

console.log(process.env);

// create and config server
const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

// Database
const db = new Database('./src/db/cards.db', {
  verbose: console.log,
});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Endpoints

server.post('/card', (req, res) => {
  //req body

  //COMPROBAR INFO QUE RECIBO POR BODY PARAMS
  //Si todo va mal: manda mensaje de error
  if (
    req.body.palette === '' ||
    req.body.name === '' ||
    req.body.job === '' ||
    req.body.phone === '' ||
    req.body.email === '' ||
    req.body.linkedin === '' ||
    req.body.github === '' ||
    req.body.photo == ''
  ) {
    //Respuesta si todo va mal
    const responseError = {
      error: 'Database error: ER_DATA_TOO_LONG',
      success: false,
    };

    //Envío de respuesta
    res.json(responseError);
  } else {
    //Si todo corecto: creo la tarejta y envío la respuesta
    const newCard = req.body;

    //Guardar newCard en la base de datos
    const insertStmt = db.prepare(
      'INSERT INTO cards (palette, name, job, phone, email, linkedin, github, photo) VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
    );
    const result = insertStmt.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.photo
    );

    //Response:respuesta si todo va bien
    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${result.lastInsertRowid}`,
      success: true,
    };

    //Envío de respuesta
    res.json(responseSuccess);
  }
});

server.get('/card/:cardId', (req, res) => {
  const id = req.params.cardId;
  const query = db.prepare('SELECT * FROM cards WHERE id = ?');
  const userCard = query.get(id);
  res.render('cards', userCard);
});

//Servidor estáticos

const staticServerPath = './src/public-react';
server.use(express.static(staticServerPath));

const staticServerCssPath = 'src/public-css';
server.use(express.static(staticServerCssPath));
