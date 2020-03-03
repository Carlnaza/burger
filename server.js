const express = require('express')
const app = express()
const { join } = require('path')
const PORT = process.env.PORT || 3000

app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.use(require('./routes'))

app.get('/', (req, res) => {
    res.render('burgs')
})

app.listen(PORT)