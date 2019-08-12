/*eslint-disable */
var fs = require('fs');

const gameList = JSON.parse(fs.readFileSync('./games.json'));
let trimmedList = gameList.filter(x => x.abbr === 'SNES' || x.abbr === 'PSX');
trimmedList[0].games = trimmedList[0].games.sort(() => .5 - Math.random()).slice(0,1000);
trimmedList[1].games = trimmedList[1].games.sort(() => .5 - Math.random()).slice(0,1000);
fs.writeFileSync('./trimmed-games.json', JSON.stringify(trimmedList));
