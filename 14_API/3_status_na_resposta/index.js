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


    if(!name){
        res.status(422).json({messege: 'O Campo nome é obrigatório!'})
        return
    }

    console.log(name)
    console.log(price)

    res.status(201).json({messege: `O produto ${name} foi criado com sucesso!`})
})


app.get('/', (req, res) => {
    res.status(200).json({messege: 'primeira rota criada com sucesso'})
})

app.listen(3000)