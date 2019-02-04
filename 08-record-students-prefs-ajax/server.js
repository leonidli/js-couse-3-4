const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

const students = {};

app.get('/', (req, res) => res.send('Hello World!'))

/*
{
    "name": "Vasya",
    "technology": "",
    "technologies" : []
}
*/

app.use(cors())
app.use(bodyParser.json())

app.post('/preferences', (req, res) => {
    const pref = req.body
    console.log('POST /preferences', pref);
    if (pref.name){
        if ((pref.technologies && pref.technologies.length > 0) || pref.technology){
            students[pref.name] = pref
            return res.status(200).send('Ok!');
        }
    } 

    res.status(400).send('Bad request!')
});

app.get('/preferences', (req, res) => {
    res.status(200).send(students)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))