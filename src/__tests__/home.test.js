import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Home from '../pages/Home';

describe('Home page test', () => {
  it('renders home page', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>
      )
      .toJSON();
    expect(app).not.toMatchSnapshot();
  });
});
