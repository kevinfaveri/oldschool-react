import React, { useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import Shortid from 'shortid';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from '../components/carousel/carousel';
import * as GamesAction from '../store/actions/games';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { gamesData, favsData, isLoadingDashboard } = useSelector(
    (state) => state.games,
  );

  useEffect(() => {
    const requestDashboardData = () =>
      dispatch(GamesAction.requestDashboardData());
    requestDashboardData();
    // eslint-disable-next-line
  }, []);

  const renderGamesData = (data) => {
    if (isLoadingDashboard) {
      return (
        <h1 className="text-center">
          <Spin
            tip="Loading, please wait..."
            size="large"
            style={{ marginTop: '2vh' }}
          />
        </h1>
      );
    }
    return (
      <>
        <h3 className="text-primary">Total: {data.total}</h3>
        {data.list.map((gameList) => (
          <h3 className="text-primary" key={Shortid.generate()}>
            {gameList.platform}: {gameList.total}
          </h3>
        ))}
      </>
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
        paddingBottom: '20%'
      }}
    >
      <Row gutter={24}>
        <Col span={22} offset={1}>
          <h1
            className="text-center text-primary text-big"
            style={{ marginTop: '2vh' }}
          >
            Welcome to the Old School Game Library
          </h1>
          <Carousel />
        </Col>
      </Row>
      <Row>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 9, offset: 1 }}
        >
          <h1
            className="text-center text-primary text-big"
            style={{ marginTop: '2vh' }}
          >
            <Link to="/library">Library</Link>
          </h1>
          <div className="clean-card" style={{ padding: '15px' }}>
            {renderGamesData(gamesData)}
          </div>
        </Col>
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 9, offset: 1 }}
        >
          <h1
            className="text-center text-primary text-big"
            style={{ marginTop: '2vh' }}
          >
            <Link to="/favs">Your Favs</Link>
          </h1>
          <div className="clean-card" style={{ padding: '15px' }}>
            {renderGamesData(favsData)}
          </div>
        </Col>
      </Row>
    </div>
  );
}
