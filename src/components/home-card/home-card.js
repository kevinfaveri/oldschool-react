import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Container from './styles';
import Logo from '../../assets/logo.png';

function HomeCard({ children }) {
  return (
    <Container id="home-card">
      <Link to="/">
        <Button className="btn-secondary" size="large" icon="rollback">
          Back
        </Button>
      </Link>
      <img src={Logo} alt="Logo" />
      <div>{children}</div>
    </Container>
  );
}

HomeCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeCard;
