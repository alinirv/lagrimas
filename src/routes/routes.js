const express = require('express');
const router =express.Router();


router.get('/', (req, res) =>{
    res.sendFile('index.html', {root:'public'})
})

router.get('/listar', (req, res) =>{
    res.sendFile('listar.html', {root:'src/views'})
})



module.exports =router;