const express = require('express')
const User = require('./models/user')
const bodyParser = require('body-parser')
const app = express()
const Game =require('./models/game')
const port = process.env.PORT || 3000

//const db = require('./db/postgres')
//const port = 3000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Get Request to root URL
app.get('/', (request, response) => {
  response.json({Welcome: 'How to create API with Node.js, Express and PostgreSQL'})
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get('/games', async (request, response) => {
  const match = {}
  const sort ={}
  if (req.query.completed) {
    match.completed = req.query.completed === 'true'
}

if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':')
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1 
} 

try {
    await req.user.populate({
        path: 'games',
        match, 
        options: {
            limit: parseInt(req.query.limit),
            skip: parseInt(req.query.skip),
            sort
        }
    }).execPopulate()
    res.send(req.games)
} catch (e) {
    res.status(500).send()
}
})

// app.get('/games', db.getGames)
// app.get('/games/:id', db.getGamesById)
// app.post('/games', db.createGames)
// app.put('/games/:id', db.updateGames)
// app.delete('/games/:id', db.deleteGames) 






//old setup
// const app = express()


// app.use(express.json())

// app.post('/users', (req, res) => {
//    const user = new User(req.body)

//    user.save().then(() => {
//     res.send(user)
//    }).catch((e) => {
//     res.status(400).send(e)
//    })
// })

// app.post('/gamedaystats', (req, res) => {
//     const user = new Game(req.body)
 
//     user.save().then(() => {
//      res.send(game)
//     }).catch((e) => {
//      res.status(400).send(e)
//     })
//  })


// app.listen(port, () => {
//     console.log('Server is up on port ' + port) 
// })