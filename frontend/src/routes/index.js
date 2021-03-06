import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { SignIn } from '~/pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
