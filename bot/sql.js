const sql = require('mssql')

const sqlConfig = {
            server: process.env.SQL_SERVER_NAME,
            authentication: {
                type: 'azure-active-directory-msi-app-service',
            },
            database: process.env.SQL_DB_NAME
        }

exports.addEvent = function(name, desc, count, created_by) {
        let queryStr = 'insert into events (event_name, event_desc, required_volunteer, created_by, created_at, state) '
        queryStr += 'values (\'' + name + '\', \'' + desc + '\', ' + count + ', \'' + created_by + '\', ' + Date.now() + ', 0)'  
        return sql.connect(sqlConfig).then((pool) =>{
            pool.query(queryStr, (err, result) =>{
            })
        })
    }

