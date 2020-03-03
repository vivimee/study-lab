import Container from '../containers/reactStack/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/reactStack/index', () => {
    const NewContainer = require('../containers/reactStack/index')
      .default;
    render(NewContainer);
  });
}
