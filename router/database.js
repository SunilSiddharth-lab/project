const express = require('express')
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

module.exports = router