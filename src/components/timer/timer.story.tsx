import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Timer} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Timer', module);

stories.add(`default`, (): ReactElement => (
    <Timer />
));

