const express = require('express')
const path = require('path')

const app = express()

const views = path.join(__dirname, '/views')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render(views + '/home/index')
})

app.get('/formulario_inclusao_noticia', (req, res) => {
  res.render(views + '/admin/form_add_noticia')
})

app.get('/noticias', (req, res) => {
  res.render(views + '/noticias/noticias')
})

app.listen(3000, () => {
  console.log('Listening on port 3000... ')
})