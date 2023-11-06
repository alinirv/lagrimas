const express = require('express');
const router =express.Router();
const LagrimaController = require('../controller/controller');


router.get('/', (req, res) =>{
    res.sendFile('index.html', {root:'public'})
})

router.get('/lagrima', (req, res) =>{
    res.sendFile('lagrima.html', {root:'src/views'})
})

router.get('/cadastrar', (req, res) =>{
    res.sendFile('cadastro.html', {root:'src/views'})
})

router.get('/api/lagrimas', LagrimaController.getLagrimas);

router.post('/api/newlagrimas', LagrimaController.createLagrima);

router.get('/api/lagrimas/:id', LagrimaController.getLagrimaById);

router.put('/api/editlagrimas/:id', LagrimaController.updateLagrima);

router.delete('/api/deletelagrimas/:id', LagrimaController.deleteLagrima);

module.exports =router;