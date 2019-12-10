'use strict';
const connection = require ("./connection")

module.exports.GetAllDataTransactions = (event,context,callback) => {
  context.callbackWaitsForEmptyEventLoop = false
  const query = "SELECT * FROM Transactions"
  connection.query(query,(error,rows) => {
    if(error) {
      callback({
        statusCode:500,
        body:JSON.stringify(error)
      })
    } else {
      callback(null,{
        statusCode:200,
        body:JSON.stringify({
          Transactions:rows
        })
      })
    }
  })
}

module.exports.UpdateDataTransactions = (event,context,callback) => {
  
}
