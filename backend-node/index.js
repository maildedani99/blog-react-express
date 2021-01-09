const express = require('express');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));


app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: '185.66.41.111',
    port: '3306',
    user: 'myproweb21',
    password: 'Kar3lapp3l',
    database: 'guiadb'
});


app.use(cors()); 
console.log("backend running")
//route
app.get('/api/welcome', (req, res) => {
    res.send('Welcome to my API2');
})
//clientes
app.get('/api/posts', (req, res) => {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    })
})

app.get('/api/icons', (req, res) => {
    const sql = 'SELECT * FROM icons';

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('Not result');
        }
    })
})
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const sql = `SELECT * FROM posts WHERE id = ${id}`;
    connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('Not result');
        }
    })

})

/* app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  }); */


  const port = process.env.PORT || 8080;
app.listen(port);

console.log(`Password generator listening on ${port}`);
app.post('/add', (req, res) => {
    const sql = 'INSERT INTO posts SET ?';
    const postObj = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        city: req.body.city,
    }
    connection.query(sql, postObj, error => {
        if (error) throw error;
        res.send('Customer Created!');
    })
    });



/* app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, city } = req.body;
    const sql = `UPDATE customers SET first_name = '${first_name}', last_name='${last_name}', city = '${city}' WHERE id='${id}'`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Customer Updated!');
    }); 
}) */
/* app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM customers WHERE id=${id}`;
    connection.query(sql, error => {
        if (error) throw error;
        res.send('Customer Deleted!');
    }); 
}) */
//check connect
/* connection.connect(error => {
    if (error) throw error;
    console.log('Database server running!!')
}) */

/* app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`Server running on port ${url}`);
}) */