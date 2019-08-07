import React, { Component } from 'react';
import { Row, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import Shortid from 'shortid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import LayoutAuth from '../components/layout-auth/layout-auth';
import Carousel from '../components/carousel/carousel';
import * as GamesAction from '../store/actions/games';

class Dashboard extends Component {
  async componentDidMount() {
    const { requestDashboardData } = this.props;
    requestDashboardData();
  }

  renderGamesData(gamesData) {
    const { isLoadingData } = this.props;

    if (isLoadingData) {
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
    const { gamesData, favsData } = this.props;

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

const mapStateToProps = state => ({
  isLoadingData: state.games.isLoading,
  gamesData: state.games.gamesData,
  favsData: state.games.favsData,
});

const mapDispatchToProps = dispatch => bindActionCreators(GamesAction, dispatch);

Dashboard.propTypes = {
  isLoadingData: PropTypes.bool.isRequired,
  gamesData: PropTypes.object.isRequired,
  favsData: PropTypes.object.isRequired,
  requestDashboardData: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
