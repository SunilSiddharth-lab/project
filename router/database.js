const express = require('express')
const { PushToTable } = require('../controllers/pushToTable')
const router = express.Router()
const createDb = require('../db/createDb')
const createTables = require('../db/create_tables')


router.get('/create-db', (req, res) => {
    createDb().then((result) => {
        res.json({message: result})
    })
})

router.get('/create-table', (req, res) => {
    createTables().then((result) => {
        res.json({message: result})
    })
})

router.post('/insert-to-table', PushToTable )


module.exports = router