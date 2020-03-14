import Container from '../containers/currying/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/currying/index', () => {
    const NewContainer = require('../containers/currying/index').default;
    render(NewContainer);
  });
}
