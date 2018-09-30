const express = require('express')
const path = require('path')

const app = express()

const views = path.join(__dirname, '/views')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Olá mundo')
})

app.get('/nome/:nome', (req, res) => {
  res.send(`Nome: ${req.params.nome}`)
})

app.get('/tecnologia', (req, res) => {
  res.render(views + '/secao/tecnologia')
})

app.listen(3000, () => {
  console.log('Listening on port 3000... ')
})