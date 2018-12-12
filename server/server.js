import devBundle from './devBundle'; //Solo en modo development
import template from './../index.jsx';

import { MongoClient } from 'mongodb'; //Base de datos

const path = require('path');
const express = require('express');
const app = express();

devBundle.compile(app) //Solo en modo development

const CURRENT_WORKING_DIR = process.cwd();
app.use('/', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})


//Inicializar
let port = process.env.PORT || 9000
app.listen(port, function onStart(err) {
    if (err) { //Si hay un error
        console.log(err)
    } else {
        console.log("Working")
    }
})

//Coneccion de Node server con MongoDB
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/ailtonmern_dev'
MongoClient.connect(url, (err, db) => {
    console.log("Conectado a la base de datos");
    db.close();
})