const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors');
const connection = require('./database/connection')
const User = require('./models/User');
const Class = require('./models/Class');
const History = require('./models/History'); 

const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(cors('*'))


connection
    .authenticate()
    .then(() => {
        console.log("database connected");
        return connection.sync({ alter: true }); // Sincroniza todas as tabelas
    })
    .then(() => {
        console.log('all tables sincro');
    })
    .catch((err) => {
        console.error(err);
    });


require('./routes/index')(app);


app.listen(7070, () => {
    console.log("Server is running on port 7070!");
});