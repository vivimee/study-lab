import Container from '../containers/animationJs/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/animationJs/index', () => {
    const NewContainer = require('../containers/animationJs/index')
      .default;
    render(NewContainer);
  });
}
