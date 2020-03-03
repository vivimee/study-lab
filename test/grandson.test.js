import React from 'react';
import renderer from 'react-test-renderer';
import GrandSon from '../src/containers/reactStack/components/Son/GrandSon';

test('GrandSon should has name and age', () => {
  const component = renderer.create(<GrandSon />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
})
