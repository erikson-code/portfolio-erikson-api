const express = require('express')
const router = express.Router()
const { getPortfolios,
     getPortfoliosById,
      createPortfolio,
      updatePortfolio,
      deletePortfolio } = require('../controllers/portfolios')

const { checkJwt } = require('../controllers/auth')



router.get('', getPortfolios)
router.get('/:id', getPortfoliosById)

router.post('',createPortfolio)
router.patch('/:id',updatePortfolio)
router.delete('/:id',deletePortfolio)

module.exports = router