import React from 'react';
import renderer from 'react-test-renderer';

import { OverflowText } from './overflow-text';

it('should match snapshot', () => {
  const tree = renderer.create(<OverflowText>Foo bar</OverflowText>).toJSON();

  expect(tree).toMatchSnapshot();
});
