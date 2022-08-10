const db = require('../db/configuration')


exports.PushToTable = async (req, res) => {
    try{
        const tableName = req.body.tableName
        if(req.body.tableName === "Variant_A") {
            await db.none(
                `INSERT INTO "Variant_A" (load_test, resistance_testing, length_test, quality_control, current, time, force, distance, temperature, water_flow, serial_number)
                values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                [
                    req.body.load_test,
                    req.body.resistance_test,
                    req.body.length_test,
                    req.body.quality_control,
                    req.body.current,
                    req.body.time,
                    req.body.force,
                    req.body.distance,
                    req.body.temperature,
                    req.body.water_flow,
                    req.body.serial_number
                ]
            )
            return res.status(200).json({status: true, message: 'Inserted To Table Variant_A successfully'})
        } else if (req.body.tableName === "Variant_B") {
            await db.none(
                `INSERT INTO "Variant_B" (load_test, resistance_testing, length_test, quality_control, current, time, force, distance, temperature, water_flow, serial_number)
                values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                [
                    req.body.load_test,
                    req.body.resistance_test,
                    req.body.length_test,
                    req.body.quality_control,
                    req.body.current,
                    req.body.time,
                    req.body.force,
                    req.body.distance,
                    req.body.temperature,
                    req.body.water_flow,
                    req.body.serial_number
                ]
            )
            return res.status(200).json({status: true, message: 'Inserted To Table Variant_B successfully'})
            
        } else if (req.body.tableName === "Variant_C") {
            await db.none(
                `INSERT INTO "Variant_C" (load_test, resistance_testing, length_test, quality_control, current, time, force, distance, temperature, water_flow, serial_number)
                values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                [
                    req.body.load_test,
                    req.body.resistance_test,
                    req.body.length_test,
                    req.body.quality_control,
                    req.body.current,
                    req.body.time,
                    req.body.force,
                    req.body.distance,
                    req.body.temperature,
                    req.body.water_flow,
                    req.body.serial_number
                ]
            )
            return res.status(200).json({status: true, message: 'Inserted To Table Variant_C successfully'})
           
        } else {
            return res.status(400).json({message: 'No such Table Exisits'})
        }


    } catch (err) {
        res.status(400).json({message: err.message})
    }
    
}



