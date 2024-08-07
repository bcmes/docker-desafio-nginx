
const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

// connection.query("DROP TABLE IF EXISTS people")
// connection.query("CREATE TABLE people (name VARCHAR(255))")
// connection.query(`INSERT INTO people(name) values('Wesley')`)
// connection.query(`INSERT INTO people(name) values('Bruno')`)
// connection.query(`INSERT INTO people(name) values('Marone')`)

getPeople(function(result){
    app.get('/', (req, res) => {
        let html = `<h1>Full Cycle Rocks!</h1><ol type="I">`
        for (let value of result){
            html += `<li>${value.name}</li>`
        }
        html += "</ol>"
        res.send(html)
    })
    
 });
 
connection.end()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function getPeople(callback){
    connection.query("SELECT * FROM people", function(err, results){
          if (err){ 
            throw err;
          }
          console.log(results); 
          return callback(results);
  })
}
