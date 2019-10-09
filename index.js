const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send({
      'info': {
          'name':'Arthur Fleck',
          'programs':[
              {
                  'programName':'Letras',
                  'programId':'LET_B1',
                  'termCode':'201920'
              },
              {
                  'programName':'Direito Bacharelado',
                  'programId':'DCH_B1',
                  'termCode':'201920'
              }
          ]
      }
  })
})
 
app.listen(3001)