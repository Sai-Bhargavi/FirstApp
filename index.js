const express = require('express')
const birds = require('./birds')
const db = require('./DbConnection')
const user = require('./UserTable')
const employee = require('./EmployeeTable')
const app = express()
const port = 3000

connection = db.sequelize
//testConnection = db.testConnection()
app.get('/', (req, res) => {
    testConnection = db.testConnection()
  res.send(__dirname)
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use('/birds', birds)

db.sequelize.sync()

//db.sequelize.drop()