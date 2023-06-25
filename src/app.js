import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const usuarios = []

const tweets = []

app.post('/sign-up', (req, res) => {

    usuarios.push(req.body)
    console.log(usuarios)
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    console.log(req.body)
})

app.get('/tweets', (req, res) => {
    console.log(req.body)
})


const PORT = 5000
app.listen(PORT, () => console.log(`O Servidor está rodando na porta ${PORT}`))