import React, { useState, useEffect, useCallback } from 'react';
import { Row, Col, Input, Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import ModalGame from '../components/modal-game/modal-game';
import GameList from '../components/game-list/game-list';
import * as GamesAction from '../store/actions/games';

const GAMES_TOTAL = 12;
const INITIAL_STATE = {
  modalGameVisible: false,
  selectedGame: null,
  searchTerm: '',
};

export default function Library() {
  const [{ modalGameVisible, selectedGame, searchTerm }, setState] = useState(
    INITIAL_STATE,
  );

  const dispatch = useDispatch();
  const { gameList, isLoadingGameList } = useSelector((state) => state.games);

  useEffect(() => {
    const requestGameList = () =>
      dispatch(GamesAction.requestGameList(GAMES_TOTAL));
    requestGameList();
    // eslint-disable-next-line
  }, []);

  const gameOnClick = useCallback(
    (game) => {
      setState((prevState) => ({
        ...prevState,
        modalGameVisible: true,
        selectedGame: game,
      }));
    },
    [setState],
  );

  const onCancelModal = () => {
    setState((prevState) => ({
      ...prevState,
      modalGameVisible: false,
      selectedGame: null,
    }));
  };

  const searchGame = () => {
    const searchGameList = () =>
      dispatch(GamesAction.searchGameList(searchTerm, GAMES_TOTAL));
    searchGameList();
  };

  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    setState((prevState) => ({ ...prevState, searchTerm: inputValue }));
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
        <Row style={{ padding: '0 15px', paddingBottom: '100px' }} gutter={24}>
          <GameList
            isLoading={isLoadingGameList}
            gamesArray={gameList}
            maxTotalGames={GAMES_TOTAL}
            gameOnClick={gameOnClick}
          />
        </Row>
      </div>
      {renderModalGame()}
    </>
  );
}
