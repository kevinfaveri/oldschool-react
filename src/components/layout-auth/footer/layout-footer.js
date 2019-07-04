import React from 'react';
// Components
import { Layout } from 'antd';

const { Footer } = Layout;

const LayoutFooter = () => (
  <Footer style={{ textAlign: 'center' }}>
    <span>
      2019 - Kevin Aguiar - <a href="https://github.com/kevinfaguiar">Github</a>
    </span>
  </Footer>
);

export default LayoutFooter;
