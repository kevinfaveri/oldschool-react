import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import Shortid from 'shortid';
import LayoutAuth from '../components/layout-auth/layout-auth';
import Carousel from '../components/carousel/carousel';
import { getGamesData, getFavsData } from '../service/games-service';

export default class Dashboard extends Component {
  state = {
    isLoading: true,
    gamesData: null,
    favsData: null,
  };

  async componentDidMount() {
    const gamesData = await getGamesData();
    const favsData = await getFavsData();
    this.setState({
      gamesData,
      favsData,
      isLoading: false,
    });
  }

  renderGamesData(gamesData) {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <h1 className="text-center">
          <Spin tip="Loading, please wait..." size="large" style={{ marginTop: '2vh' }} />
        </h1>
      );
    }
    return (
      <>
        <h3 className="text-primary">Total: {gamesData.total}</h3>
        {gamesData.list.map(gameList => (
          <h3 className="text-primary" key={Shortid.generate()}>
            {gameList.platform}: {gameList.total}
          </h3>
        ))}
      </>
    );
  }

  render() {
    const { gamesData, favsData } = this.state;
    return (
      <LayoutAuth>
        <Row gutter={24}>
          <Col span={22} offset={1}>
            <h1 className="text-center text-primary text-big" style={{ marginTop: '2vh' }}>
              Welcome to the Old School Game Library
            </h1>
            <Carousel />
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={8} offset={2}>
            <h1 className="text-center text-primary text-big" style={{ marginTop: '2vh' }}>
              <Link to="/library">Library</Link>
            </h1>
            <div className="clean-card" style={{ padding: '15px' }}>
              {this.renderGamesData(gamesData)}
            </div>
          </Col>
          <Col span={8} offset={2}>
            <h1 className="text-center text-primary text-big" style={{ marginTop: '2vh' }}>
              <Link to="/favs">Your Favs</Link>
            </h1>
            <div className="clean-card" style={{ padding: '15px' }}>
              {this.renderGamesData(favsData)}
            </div>
          </Col>
        </Row>
      </LayoutAuth>
    );
  }
}
