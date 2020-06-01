import Container from '../containers/webrtc/index';
import render from '../utils/render';

render(Container);

if (module.hot) {
  module.hot.accept('../containers/webrtc/index', () => {
    const NewContainer = require('../containers/webrtc/index').default;
    render(NewContainer);
  });
}
