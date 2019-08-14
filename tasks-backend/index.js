const app = require('express')()
const db = require('./config/db')
const consign = require('consign')

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db 

const port = 3000;

app.listen(port, () => {
    console.log(`Running with port(s) ${port}`)
})