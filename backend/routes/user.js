const express = require('express')
const router = express.Router()

// Controler pour associer les fonctions aux différentes routes
const userCtrl = require('../controllers/user')

// Création de deux routes "post" pour envoyer mail et mdp
router.post('/signup', userCtrl.signup)
router.post('/login', userCtrl.login)

module.exports = router