const axios = require('axios')
const MLBStatsAPI = require('mlb-stats-api')
const { express } = require('express')
const mlbStats = new MLBStatsAPI()
const url = 'http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1'

async function fetchTodaysGames() {
    try {
        const response = await axios.get(url)
        const responseBody = JSON.parse(response.body)
        const games = responseBody.dates[0].games
        games.forEach(game => {
            console.log(game.officialDate, game.teams.away.team.name, game.teams.away.score, game.teams.home.team.name, game.teams.home.score);
        })
    return games

    }
    catch (error) {
        console.error(error);
    }
}





module.exports = fetchTodaysGames



//Prints out today's games and scores
// request({url},(error, response) => {
//     const responseBody = JSON.parse(response.body)
//     const games = responseBody.dates[0].games
//     games.forEach(game => {
//     console.log(game.officialDate, game.teams.away.team.name, game.teams.away.score, game.teams.home.team.name, game.teams.home.score);
//     })
//     })
// }



// Figure out how the above works  Go back and look at each line again and think through what it's doing. Refer to the JavaScript MDN documentation if it's helpful.
//For visualizing the JSON data structure better I also highly recommend https://jsoneditoronline.org/

