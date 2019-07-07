import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/logo.png';

const HomeCard = ({ children }) => (
  <div className="clean-card">
    <Link to="/">
      <Button
        className="btn-secondary"
        size="large"
        icon="rollback"
        style={{ float: 'left', marginLeft: '5px', marginTop: '5px' }}
      >
        Back
      </Button>
    </Link>
    <img
      src={Logo}
      alt="Logo"
      style={{
        float: 'right',
        marginRight: '15px',
        marginTop: '15px',
        height: '25px',
      }}
    />
    <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>{children}</div>
  </div>
);

HomeCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeCard;
