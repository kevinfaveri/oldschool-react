import Axios from 'axios';

const groupBy = (prop, array) => array.reduce((groups, item) => {
  const val = item[prop];
  groups[val] = groups[val] || [];
  groups[val].push(item);
  return groups;
}, {});

export const getAllGames = sizeLimit => new Promise(async (resolve) => {
  const { data } = await Axios.get(`${process.env.PUBLIC_URL}/metadata/trimmed-games.json`);
  let gameList = [];
  data.forEach((element) => {
    gameList.push(...element.games);
  });
  gameList = gameList.sort(() => 0.5 - Math.random()).slice(0, sizeLimit);
  setTimeout(() => {
    resolve(gameList);
  }, 5000);
});

export const getGamesData = () => new Promise(async (resolve) => {
  const { data } = await Axios.get(`${process.env.PUBLIC_URL}/metadata/trimmed-games.json`);
  const gameList = [];
  data.forEach((element) => {
    gameList.push(...element.games);
  });
  const gamesData = { total: gameList.length, list: [] };
  const gamesByPlatform = groupBy('Platform', gameList);
  Object.keys(gamesByPlatform).forEach((platform) => {
    gamesData.list.push({ platform, total: gamesByPlatform[platform].length });
  });
  setTimeout(() => {
    resolve(gamesData);
  }, 5000);
});

export const getFavsData = () => new Promise(async (resolve) => {
  // TODO: Alterar lógica para pegar os favs de localStorage
  const { data } = await Axios.get(`${process.env.PUBLIC_URL}/metadata/trimmed-games.json`);
  const gameList = [];
  data.forEach((element) => {
    gameList.push(...element.games);
  });
  const gamesData = { total: gameList.length, list: [] };
  const gamesByPlatform = groupBy('Platform', gameList);
  Object.keys(gamesByPlatform).forEach((platform) => {
    gamesData.list.push({ platform, total: gamesByPlatform[platform].length });
  });
  setTimeout(() => {
    resolve(gamesData);
  }, 5000);
});

export const searchInAllGames = (searchTerm, sizeLimit) => new Promise(async (resolve) => {
  const { data } = await Axios.get(`${process.env.PUBLIC_URL}/metadata/trimmed-games.json`);
  let gameList = [];
  data.forEach((element) => {
    gameList.push(...element.games);
  });
  gameList = gameList.filter(
    game => (game.Name && game.Name.toUpperCase().includes(searchTerm.toUpperCase()))
        || (game.Overview && game.Overview.toUpperCase().includes(searchTerm.toUpperCase())),
  );
  gameList = gameList.sort(() => 0.5 - Math.random()).slice(0, sizeLimit);
  setTimeout(() => {
    resolve(gameList);
  }, 5000);
});
