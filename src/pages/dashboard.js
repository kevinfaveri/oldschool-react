import React, { Component } from 'react';
import { Row, Col } from 'antd';
import QueueAnim from 'rc-queue-anim';
import LayoutAuth from '../components/layout-auth/layout-auth';
import GameCard from '../components/game-card/game-card';

class Dashboard extends Component {
  state = {
    gamesArray: [],
  };

  async componentDidMount() {
    this.setState({
      gamesArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    });
  }

  render() {
    const { gamesArray } = this.state;
    if (gamesArray.length !== 0) {
      return (
        <LayoutAuth>
          <Row
            style={{ paddingLeft: '10px', paddingRight: '10px', overflow: 'hidden' }}
            gutter={16}
          >
            <QueueAnim type="bottom" component="div" duration={700}>
              {gamesArray.map(item => (
                <Col span={6} style={{ marginTop: '10px', marginBottom: '10px' }} key={item}>
                  <GameCard />
                </Col>
              ))}
            </QueueAnim>
          </Row>
        </LayoutAuth>
      );
    }
    return (
      <LayoutAuth>
        <h1 className="text-center text-primary" style={{ margin: '15px' }}>
          There are no games available, please try again later...
        </h1>
      </LayoutAuth>
    );
  }
}

export default Dashboard;
