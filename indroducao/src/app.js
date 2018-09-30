const app = require('./config/server')

const homeRoute = require('./routes/home')
const noticiasRoute = require('./routes/noticias')
const formulario_inclusao_noticia = require('./routes/formulario_inclusao_noticia')

homeRoute(app)
noticiasRoute(app)
formulario_inclusao_noticia(app)

app.listen(3000, () => {
  console.log('Listening on port 3000... ')
})