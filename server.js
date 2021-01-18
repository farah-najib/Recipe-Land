console.log('May Node be with you')

const express = require('express');

const app = express();
//setting middleware
app.use(express.static('css'));
app.use(express.static('js'));

const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require("./routers/viewRoutes")(app);

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000')    
})