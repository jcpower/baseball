const express = require('express')
const User = require('./models/user')
const bodyParser = require('body-parser')
const app = express()
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



// app.get('/games', db.getGames)
// app.get('/games/:id', db.getGamesById)
// app.post('/games', db.createGames)
// app.put('/games/:id', db.updateGames)
// app.delete('/games/:id', db.deleteGames) 



// app.listen(port, () => {
//   console.log(`App running on port ${port}.`)
//})












//old setup
// const app = express()
// const port = process.env.PORT || 3000

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