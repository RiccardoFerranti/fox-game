import { FC } from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import Welcome from './Welcome';
import Game from './Game';
import Splash from './Splash';
import ScoreBoard from './ScoreBoard';

const AppRoutes: FC = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
      <Route path="/score" element={<ScoreBoard />} />
      <Route path="*" element={<Splash />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
