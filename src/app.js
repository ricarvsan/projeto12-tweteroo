import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

const usuarios = []

const tweets = []

app.post('/sign-up', (req, res) => {
    usuarios.push(req.body)
    res.send('OK')
})

app.post('/tweets', (req, res) => {
    const { username, tweet } = req.body

    if (usuarios.find(obj => obj.username === username)) {
        tweets.push(tweet)
        return res.send('OK')
    } else {
        return res.send('UNAUTHORIZED')
    }
})

app.get('/tweets', (req, res) => {
    let last10Tweets = []

    for (let i = 0; i < tweets.length; i++) {
        last10Tweets.push(
            {
                username: usuarios[0].username,
                avatar: usuarios[0].avatar,
                tweet: tweets[i]
            }
        )
    }

    if(last10Tweets.length > 10) {
        last10Tweets = last10Tweets.slice(-10)
    }

    res.send(last10Tweets)
}) 

const PORT = 5000
app.listen(PORT, () => console.log(`O Servidor está rodando na porta ${PORT}`))