import Container from '../containers/redux-blog/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/redux-blog/index', () => {
    const NewContainer = require('../containers/redux-blog/index').default;
    render(NewContainer);
  });
}
