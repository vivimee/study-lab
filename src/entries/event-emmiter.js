import Container from '../containers/eventEmmiter/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/eventEmmiter/index', () => {
    const NewContainer = require('../containers/eventEmmiter/index').default;
    render(NewContainer);
  });
}
