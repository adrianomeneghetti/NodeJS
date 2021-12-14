const express = require('express')
const cors = require('cors')

const app = express()

//config JSON
app.use(express.json())

//Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))

/// public folder for imagem
app.use(express.static('public'))

/// Routes

app.listen(5000)