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

export default function Favs() {
  const [{ modalGameVisible, selectedGame, searchTerm }, setState] = useState(
    INITIAL_STATE,
  );

  const dispatch = useDispatch();
  const { favList, isLoadingFavList } = useSelector((state) => state.games);

  useEffect(() => {
    const requestFavList = () =>
      dispatch(GamesAction.requestFavList(GAMES_TOTAL));
    requestFavList();
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
    const searchFavList = () =>
      dispatch(GamesAction.searchFavList(searchTerm, GAMES_TOTAL));
    searchFavList();
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
        <Row style={{ padding: '30px 15px' }} gutter={24}>
          <GameList
            isLoading={isLoadingFavList}
            gamesArray={favList}
            maxTotalGames={GAMES_TOTAL}
            gameOnClick={gameOnClick}
          />
        </Row>
      </div>
      {renderModalGame()}
    </>
  );
}
