const db = require('./db')
//const registration_table = db.query(' CREATE TABLE registration (firstname varchar(30) NOT NULL,lastname varchar(30),username varchar (30) NOT NULL,password varchar(30) NOT NULL,email varchar(30) NOT NULL,created_At TIMESTAMP DEFAULT NOW())')

const userData = `CREATE TABLE IF NOT EXISTS "userdata" (
    id SERIAL PRIMARY KEY,
    firstname varchar(30) NOT NULL,
    lastname varchar(30),
    username varchar (30) NOT NULL,
    password varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    created_At TIMESTAMP DEFAULT NOW(), 
    role varchar(30) NOT NULL
    );
`

const createTables = async function () {
    try {

        const allTables = await db.manyOrNone("SELECT table_name from information_schema.tables")

        const data = await Promise.all([
            createUserData()
        ])

        async function createUserData() {
            const filterTables = allTables.filter((table) => table.table_name === "userdata")
    
            if(!filterTables[0]) {
                await db.none(userData)
                return "Table created successfully"
            } 
            else {
                return "Table already exists"
            }
        }
        return data
    } catch (e) {
        return e.message
    }
}

module.exports = createTables

