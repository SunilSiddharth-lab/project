const pgp = require('pg-promise')()

const connectionString = "postgres://postgres:Sunil@123@localhost:5432"
const db = pgp(connectionString)

const createDatabase = async function () {
    try {
        const allDatabases = await db.manyOrNone("SELECT datname from pg_database")

        const filterDatabase = allDatabases.filter((database) => {
            database.datname === "appdata"
        })

        if(!filterDatabase[0]) {
            await db.none("CREATE DATABASE $1:name", ["appdata"])
            return "Database created successfully"
        } 
        else {
            return "Database already exists"
        }
    } catch (e) {
        return e.message
    }
}

module.exports = createDatabase