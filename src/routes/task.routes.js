const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async(req, res) => { //Se usa async cuando una consulta puede tomar algo de tiempo
    const tasks = await Task.find(); //Con await se declara dicha consulta
    console.log(tasks);
    res.json(tasks); //.find busca todos los documentos que tenemos en mongodb 

}); //.get Obtiene los datos de la base de datos

router.get('/:id', async(req, res) => {
    const tarea = await Task.findById(req.params.id);
    res.json(tarea);
}); //.get Obtiene los datos de la base de datos


router.post('/', async(req, res) => {
    console.log(req.body);

    const { title, description } = req.body; //Datos que el cliente envia
    const task = new Task({
        title,
        description
    })
    await task.save(); //Almacena en la base de datos
    res.json({ status: 'Tarea guardada' });
}); //.post Crea un nuevo dato

router.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const updatedTask = { title, description };
    await Task.findByIdAndUpdate(req.params.id, updatedTask);
    res.json({ status: 'Tarea actualizada' })

}); //.put actualiza los datos

router.delete('/:id', async(req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ status: 'Tarea eliminada' });
}); //.delete Borra de la base de datos

module.exports = router;