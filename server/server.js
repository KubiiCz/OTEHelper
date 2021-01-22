const express = require('express')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const fs = require('fs')
const path = require('path');
const ExcelJS = require('exceljs');

const app = express()

var corsOptions = {
  origin: 'http://localhost:3000',
}

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// file upload
app.use(fileUpload())

//Routes
// simple route
app.get('/', cors(), (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' })
})

// simple route
app.get('/users', cors(), (req, res) => {
  res.json({ message: 'There is no users..' })
})

// simple route
app.get('/user/:id', cors(), (req, res) => {
  console.log(req.params)
  var message = req.params.id
  res.json({ message: message })
})

app.post('/uploadfile', cors(), (req, res) => {

  // save file
  req.pipe(fs.createWriteStream('downloaded.xlsx'))
})

app.get('/getcsv', cors(), (req, res) => {

  var workbook = new Excel.Workbook();
  workbook.xlsx.readFile('downloaded.xlsx')
    .then(function() {
      const worksheet = workbook.getWorksheet(1)
      const nameCol = worksheet.getColumn('A');
      const row = worksheet.getRow(1);

      console.log(worksheet);
      console.log(nameCol);
      console.log(row);
    });

})

// set port, listen for requests
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
