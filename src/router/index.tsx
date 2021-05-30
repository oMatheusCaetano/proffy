import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Hero from '@/pages/Hero';
import Proffys from '@/pages/Proffys';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Hero} exact />
      <Route path="/proffys" component={Proffys} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
