import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from '../store';
import { SignUpPageView } from '../views/homepage';

export const Main = () => (
  <Switch>
    <Route path="/" component={SignUpPageView} />
  </Switch>
);

export const Routes = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
);