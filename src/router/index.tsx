import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from '@/pages/Hero';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Hero} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
