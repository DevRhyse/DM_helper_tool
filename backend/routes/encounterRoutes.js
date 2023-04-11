const express = require('express')
const router = express.Router()
const encounterController = require('../controllers/encounterController') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/encounters', ensureAuth, encounterController.getEncounter)

router.post('/createEncounter', encounterController.createEncounter)

router.put('/markComplete', encounterController.markComplete)

router.put('/markIncomplete', encounterController.markIncomplete)

router.delete('/deleteEncounter', encounterController.deleteEncounter)

module.exports = router