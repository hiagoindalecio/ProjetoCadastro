var express = require('express')
var router = express.Router()
var homeController = require('../controllers/home');

router.get('/', homeController.login)
router.post('/principal', homeController.index)
router.post('/cadastrar-pessoa.json', homeController.cadastrar_pessoa_service);
router.post('/cadastrar-pessoa', homeController.cadastrar_pessoa);
router.get('/editar')
router.get('/excluir', homeController.excluir);
router.get('/estados.json', homeController.estados);
router.get('/cidades.json', homeController.cidades);

module.exports = router;