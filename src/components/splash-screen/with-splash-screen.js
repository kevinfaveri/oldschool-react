import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './splash-screen.css';

// Components
import LoadingCarousel from '../loading-carousel/loading-carousel';
import Carousel from '../carousel/carousel';
import AudioToggle from '../audio-toggle/audio-toggle';

const withSplashScreen = WrappedComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000000);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="splash-screen">
          <Row>
            <Col className="text-center">
              <div className="header-logo">Old School</div>
              <div className="header-description">The best game library manager!</div>
            </Col>
          </Row>
          <Row>
            <Col className="text-center"><Carousel /></Col>
          </Row>
          <Row>
            <Col className="text-center"><AudioToggle /></Col>
          </Row>
        </div>
      );
    }
    return <WrappedComponent {...this.props} />;
  }
};

export default withSplashScreen;
