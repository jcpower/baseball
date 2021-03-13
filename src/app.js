const request = require('postman-request')
const MLBStatsAPI = require('mlb-stats-api')
const { express } = require('express')
const mlbStats = new MLBStatsAPI()

const url = 'http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1'
const gameinterval = 0


// //This gets us out count of games
// request ({url:url}, (error, response) => {
//     const { totalGames } = JSON.parse(response.body)
//     console.log(totalGames)
// })

//Gets basic box score - Date, away team name, away score, home team name, home team score
// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games[0].officialDate, data.dates[0].games[1].teams.away.team.name, data.dates[0].games[1].teams.away.score, data.dates[0].games[1].teams.home.team.name, data.dates[0].games[1].teams.home.score)
// })





//Gets individual game information, but not scores or team names

// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games[1])
// })

//Gets individual game information and drills down to team name
// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games[1].teams.away.team.name)
// })

//Gets home and away team names
// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games[1].teams.away.team.name, data.dates[0].games[1].teams.home.team.name )
// })




// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games[0].officialDate, data.dates[0].games[0].teams.away.team.name, data.dates[0].games[0].teams.away.score, data.dates[0].games[0].teams.home.team.name, data.dates[0].games[0].teams.home.score)
// })


//Gets you a full schedule of incomplete information
// request({ url: url}, (error, response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.dates[0].games)
// })

// const response = mlbStats.getAttendance({params: { teamId: 111, leagueId: 103, leagueListid: 103 }}).then((result) => {
//     return console.log(result)
// })

request({url}, (error, response) => {
    const responseBody = JSON.parse(response.body)
    const games = responseBody.dates[0].games
    games.forEach(game => {
    console.log(game.officialDate, game.teams.away.team.name, game.teams.away.score, game.teams.home.team.name, game.teams.home.score);
    })
    })

