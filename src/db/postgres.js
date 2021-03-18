// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'manager',
//   host: 'localhost',
//   database: 'baseball',
//   password: 'RoseHOF14',
//   port: 5432,
// })

// const getGames = (request, response) => {
//   pool.query('SELECT * FROM games ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getGamesById = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM games WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }


// const createGames = (request, response) => {
//   const { date, hometeam, hometeamscore, visitorteam, visitorteamscore } = request.body

//   pool.query('INSERT INTO games (date, hometeam, hometeamscore,visitorteam,visitorteamscore) VALUES ($1, $2, $3, $4, $5)', [date,hometeam,hometeamscore,visitorteam,visitorteamscore], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send('A new game has been added to the database')
//   })
// }

// const updateGames = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { date, hometeam, hometeamscore, visitorteam,visitorteamscore} = request.body
  
//     pool.query(
//       'UPDATE countries SET date = $1, hometeam = $2, hometeamscore = $3, visitorteam = $4, visitorteamscore = $5 WHERE id = $6',
//       [date, hometeam, hometeamscore,visitorteam, visitorteamscore, id ],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send('Games has been updated in the database')
//       }
//     )
//   }
  
  
  
//   const deleteGames = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM games WHERE id = $1', [id], (error, results)=> {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`Game deleted with ID: ${id}`)
//     })
//   }
  
//   module.exports = {
//     getGames,
//     getGamesById,
//     createGames,
//     updateGames,
//     deleteGames,
//   }
