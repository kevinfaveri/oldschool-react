import React, { useState, useEffect } from 'react';
import {
  Row, Col, Input, Icon,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import ModalGame from '../components/modal-game/modal-game';
import GameList from '../components/game-list/game-list';
import * as GamesAction from '../store/actions/games';

const GAMES_TOTAL = 24;
const INITIAL_STATE = {
  modalGameVisible: false,
  selectedGame: null,
  searchTerm: '',
};

export default () => {
  // TODO: Bug de Saga: Estar na página inicial e antes da página inicial resolver mudar para esta página library, ver o que acontece pelo log
  // TODO: Verificar cenário onde ele fica re-renderizando os valores, como o game list, quando eu mudo a pesquisa
  const [{ modalGameVisible, selectedGame, searchTerm }, setState] = useState(INITIAL_STATE);

  const dispatch = useDispatch();
  const { gameList, isLoading } = useSelector(state => state.games);

  useEffect(() => {
    const requestGameList = () => dispatch(GamesAction.requestGameList(GAMES_TOTAL));
    requestGameList();
  }, [dispatch]);

  const gameOnClick = (game) => {
    setState(prevState => ({ ...prevState, modalGameVisible: true, selectedGame: game }));
  };

  const onCancelModal = () => {
    setState(prevState => ({ ...prevState, modalGameVisible: false, selectedGame: null }));
  };

  const searchGame = () => {
    const searchGameList = () => dispatch(GamesAction.searchGameList(searchTerm, GAMES_TOTAL));
    searchGameList();
  };

  const onChangeInput = (e) => {
    // TODO: VER BUG AQUI QUANDO COMEÇO A ESCREVER MUITO RAPIDO
    // TODO: ESTÁ RERENDERIZANDO SEMPRE QUE ATUALIZO O SEARCHTERM
    console.log('event input', e);
    setState(prevState => ({ ...prevState, searchTerm: e.target.value }));
  };

  const renderModalGame = () => {
    if (selectedGame !== null) {
      return (
        <ModalGame
          className="clean-card"
          visible={modalGameVisible}
          game={selectedGame}
          onCancel={onCancelModal}
        />
      );
    }
    return '';
  };

  return (
    <>
      <div
        style={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Row style={{ marginTop: '2vh' }}>
          <Col span={12} offset={6}>
            <Input
              className="game-search"
              placeholder="Search Games"
              prefix={<Icon type="search" style={{ color: '#b3b3b3' }} />}
              style={{ width: '100%' }}
              size="large"
              onPressEnter={searchGame}
              onChange={onChangeInput}
              value={searchTerm}
            />
          </Col>
        </Row>
        <Row style={{ padding: '30px 15px' }} gutter={24}>
          <GameList
            isLoading={isLoading}
            gamesArray={gameList}
            maxTotalGames={GAMES_TOTAL}
            gameOnClick={gameOnClick}
          />
        </Row>
      </div>
      {renderModalGame()}
    </>
  );
};
