import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from './badge';

storiesOf('Badge', module)
  .add('with text', () => <Badge text="simple" />)
  .add('bold', () => <Badge text="simple" bold />);
