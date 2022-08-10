const db = require('./configuration')

const userData = `CREATE TABLE IF NOT EXISTS "User_Management_Table" (
    id SERIAL PRIMARY KEY,
    firstname varchar(30) NOT NULL,
    lastname varchar(30),
    username varchar (30) NOT NULL,
    password varchar(30) NOT NULL,
    email varchar(30) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(), 
    role varchar(30) NOT NULL
    );
`

const Variant_A = `CREATE TABLE IF NOT EXISTS "Variant_A" (
    id SERIAL PRIMARY KEY,
    load_test NUMERIC(7,2),
    resistance_testing NUMERIC(7,2),
    length_test NUMERIC(7,2),
    quality_control BOOLEAN,
    current NUMERIC(7,2),
    time NUMERIC(7,2),
    force NUMERIC(7,2),
    distance NUMERIC(7,2),
    temperature NUMERIC(7,2),
    water_flow NUMERIC(7,2),
    serial_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT NOW()
    );
`
const Variant_B = `CREATE TABLE IF NOT EXISTS "Variant_B" (
    id SERIAL PRIMARY KEY,
    load_test NUMERIC(7,2),
    resistance_testing NUMERIC(7,2),
    length_test NUMERIC(7,2),
    quality_control BOOLEAN,
    current NUMERIC(7,2),
    time NUMERIC(7,2),
    force NUMERIC(7,2),
    distance NUMERIC(7,2),
    temperature NUMERIC(7,2),
    water_flow NUMERIC(7,2),
    serial_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT NOW()
    );
`
const Variant_C = `CREATE TABLE IF NOT EXISTS "Variant_C" (
    id SERIAL PRIMARY KEY,
    load_test NUMERIC(7,2),
    resistance_testing NUMERIC(7,2),
    length_test NUMERIC(7,2),
    quality_control BOOLEAN,
    current NUMERIC(7,2),
    time NUMERIC(7,2),
    force NUMERIC(7,2),
    distance NUMERIC(7,2),
    temperature NUMERIC(7,2),
    water_flow NUMERIC(7,2),
    serial_number VARCHAR(10),
    created_at TIMESTAMP DEFAULT NOW()
    );
`
const Temp_Product_Data = `CREATE TABLE IF NOT EXISTS "Temp_Product_Data" (
    sno_variant_a INT,
    sno_variant_b INT,
    sno_variant_c INT,
    temp_a_ok INT,
    temp_b_ok INT,
    temp_c_ok INT,
    temp_a_not_ok INT,
    temp_b_not_ok INT,
    temp_c_not_ok INT
    );
`

const Daily_Reports = `CREATE TABLE IF NOT EXISTS "Daily_Reports" (
    created_at TIMESTAMP DEFAULT NOW(),
    variant_a_ok INT,
    variant_b_ok INT,
    variant_c_ok INT,
    variant_a_not_ok INT,
    variant_b_not_ok INT,
    variant_c_not_ok INT,
    sno_variant_a_start INT,
    sno_variant_b_start INT,
    sno_variant_c_start INT,
    sno_variant_a_end INT,
    sno_variant_b_end INT,
    sno_variant_c_end INT
    );
`

const createTables = async function () {
    try {

        const allTables = await db.manyOrNone("SELECT table_name from information_schema.tables")

        const data = await Promise.all([
            createUserData(),
            createTableVariant_A(),
            createTableVariant_B(),
            createTableVariant_C(),
            createTableTempProductData(),
            createDailyReports()
        ])

        async function createUserData() {
            const filterTables = allTables.filter((table) => table.table_name === "User_Management_Table")
    
            if(!filterTables[0]) {
                await db.none(userData)
                return "User Data Table created successfully"
            } 
            else {
                return "Table User Data already exists"
            }
        }
        async function createTableVariant_A() {
            const filterTables = allTables.filter((table) => table.table_name === "Variant_A")
    
            if(!filterTables[0]) {
                await db.none(Variant_A)
                return "Variant_A Table created successfully"
            } 
            else {
                return "Table Variant_A already exists"
            }
        }
        async function createTableVariant_B() {
            const filterTables = allTables.filter((table) => table.table_name === "Variant_B")
    
            if(!filterTables[0]) {
                await db.none(Variant_B)
                return "Variant_B Table created successfully"
            } 
            else {
                return "Table Variant_B already exists"
            }
        }
        async function createTableVariant_C() {
            const filterTables = allTables.filter((table) => table.table_name === "Variant_C")
    
            if(!filterTables[0]) {
                await db.none(Variant_C)
                return "Variant_C Table created successfully"
            } 
            else {
                return "Table Variant_C already exists"
            }
        }
        async function createTableTempProductData() {
            const filterTables = allTables.filter((table) => table.table_name === "Temp_Product_Data")
    
            if(!filterTables[0]) {
                await db.none(Temp_Product_Data)
                return "Temp_Product_Data Table created successfully"
            } 
            else {
                return "Table Temp_Product_Data already exists"
            }
        }
        async function createDailyReports() {
            const filterTables = allTables.filter((table) => table.table_name === "Daily_Reports")
    
            if(!filterTables[0]) {
                await db.none(Daily_Reports)
                return "Daily_Reports Table created successfully"
            } 
            else {
                return "Table Daily_Reports already exists"
            }
        }
        return data
    } catch (e) {
        console.log(e)
        return e.message    
    }
}



module.exports = createTables

