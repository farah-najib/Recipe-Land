console.log('May Node be with you')

const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000')    
})