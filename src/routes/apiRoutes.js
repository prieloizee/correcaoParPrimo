//Importa o módulo Router do express
//Router será utilizada para definir rotas específicas
const router = require('express').Router();

const controllerNumbers = require("../controllers/controllerNumbers");

router.post("/par/", controllerNumbers.checkpar);
router.post("/primo/", controllerNumbers.checkPrimo);


module.exports = router
