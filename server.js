const express = require('express');
const app = express();

//Envia al cliente todo lo que se encuentra en public
app.use(express.static(__dirname + '/public'));

app.listen(7000, function() {
    console.log('Server port on 8080');
});