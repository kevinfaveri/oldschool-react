import React from 'react';
import LayoutAuth from '../components/layout-auth/layout-auth';

const About = () => (
  <LayoutAuth>
    <div className="clean-card text-center" style={{ margin: '5vh' }}>
      <h1 className="text-primary text-big">
        This project is a boilerplate for developing with React and its most used toolchain.
      </h1>
      <h1 className="text-primary text-big">
        Author: <a href="https://github.com/kevinfaguiar">@kevinfaguiar</a>
      </h1>
    </div>
  </LayoutAuth>
);

export default About;
