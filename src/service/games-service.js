import Axios from 'axios';

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
