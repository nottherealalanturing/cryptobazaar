import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Layout from '../components/Layout';
import store from '../redux/store';

it('Home Components Renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
