const app = require('express')()
const helmet = require('helmet')
const { urlencoded, json } = require('body-parser')
const dictionary = require("./api/routes/dictionary")

const env = process.argv[2] || 'dev'
const { port } = require("./config/config")[env]

/**
 * CONFIGURATION bodyParser
*/
app.use(urlencoded({ extended: true }))
app.use(json())

app.set('trust proxy', 1)

/**
 * CONFIGURATION header
*/
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    next()
})

/**
 * Header X-Powered-By disable
*/
app.disable('x-powered-by')

/**
 * ROUTES Init
*/
app.use('/api', dictionary)

/**
 * Protection
 */
app.use(helmet())


app.listen(port || 3000, () => console.log("listen .... ", port))

module.exports = app