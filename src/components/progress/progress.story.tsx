import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Progress} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Progress', module);

stories.add('Progress 16', (): ReactElement =>
    <Progress percent={16}/>
);
