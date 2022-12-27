const express = require('express');
const cors = require('cors');
const { response } = require('express');
const { uuid } = require('uuidv4');
const { v4: uuidv4 } = require('uuid');
const Database = require('better-sqlite3');

console.log(process.env.PORT);

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
//NUEVO: hemos hecho cuenta en Railway y hemos importado el repo. Sustituimos el puerto inicial por el puerto que nos indica el Railway pero añadimos ese operador logico para en caso de que no funcione uno que funcione el otro. Se guarda todo en la base de datos de la nube
const serverPort = process.env.PORT || 4000;
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
    //NUEVO: modificamos new card para que sea igual al req body y le quitamos el id porque ya se crea en la base de datos
    const newCard = req.body;

    //Guardar newCard en la base de datos
    //NUEVO: Insertamos New Card en base de datos. Definimos los campos a volcar en el prepare y en el run los metemos con los datos de New Card
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
    //NUEVO: obtenemos y accedemos al id de la tarjeta que hay en la base de datos cogiendo la propiedad "lastinsertrowid" que nos devuelve el INSERT al hacerlo a través de result
    const responseSuccess = {
      cardURL: `https://project-promo-r-module-4-team-8-production.up.railway.app/card/${result.lastInsertRowid}`,
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
