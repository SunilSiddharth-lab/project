const pgp = require('pg-promise')()

const connectionString = "postgres://postgres:Sunil@123@localhost:5432/appdata"

const db =pgp(connectionString)

module.exports = db



