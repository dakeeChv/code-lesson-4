const router = require('express').Router()
const { Create, GetAll, Update } = require('../controllers/companyController')

router.post('/', Create)
router.get('/', GetAll)
router.put('/:id', Update)

module.exports = router