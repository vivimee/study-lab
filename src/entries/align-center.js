import Container from '../containers/alignCenter/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/alignCenter/index', () => {
    const NewContainer = require('../containers/alignCenter/index').default;
    render(NewContainer);
  });
}
