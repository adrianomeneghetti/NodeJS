const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas - endopoints
app.get('/', (req, res) => {
    res.json({messege: 'primeira rota criada com sucesso'})
})

app.listen(3000)