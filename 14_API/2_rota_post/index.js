const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//rotas - endopoints
app.post('/createproducts', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    console.log(name)
    console.log(price)

    res.json({messege: `O produto ${name} foi criado com sucesso!`})
})


app.get('/', (req, res) => {
    res.json({messege: 'primeira rota criada com sucesso'})
})

app.listen(3000)