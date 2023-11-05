const express = require('express');
const router =express.Router();
const LagrimaController = require('../controller/controller');


router.get('/', (req, res) =>{
    res.sendFile('index.html', {root:'public'})
})

router.get('/listar', (req, res) =>{
    res.sendFile('listar.html', {root:'src/views'})
})

router.get('/cadastrar', (req, res) =>{
    res.sendFile('cadastro.html', {root:'src/views'})
})

router.get('/api/lagrimas', LagrimaController.getLagrimas);

router.post('/api/newlagrimas', LagrimaController.createLagrima);

module.exports =router;