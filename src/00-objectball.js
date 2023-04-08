function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                }, "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                }


            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                }, "Bismak Biyombo	": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                }


            }
        }
    };
}

function findPlayer(playerName) {
    const game = gameObject();
    for (const team in game) {
        const players = game[team].players;
        if (players.hasOwnProperty(playerName)) {
            return players[playerName];
        }
    }
    return null;
}

function numPointsScored(playerName) {
    const player = findPlayer(playerName);
    return player ? player.points : "Player not found";
}

function shoeSize(playerName) {
    const player = findPlayer(playerName);
    return player ? player.shoe : "Player not found";
}

function findTeam(teamName) {
    const game = gameObject();
    return game.find(team => team.teamName === teamName);
}

function teamColors(teamName) {
    const team = findTeam(teamName);
    return team ? team.colors : "Team not found";
}

function playerNumbers(teamName) {
    const team = findTeam(teamName);
    return team ? Object.values(team.players).map(player => player.number) : "Team not found";
}

function playerStats(playerName) {
    const player = findPlayer(playerName);
    return player ? player : "Player not found";
}

function bigShoeRebounds() {
    let biggestShoeSize = -Infinity;
    let playerWithBiggestShoeSize;
    const game = gameObject();
    for (let team in game) {
        for (let player in game[team]["players"]) {
            if (game[team]["players"][player]["shoe"] > biggestShoeSize) {
                biggestShoeSize = game[team]["players"][player]["shoe"];
                playerWithBiggestShoeSize = game[team]["players"][player];
            }
        }
    }

    return playerWithBiggestShoeSize["rebounds"];
}