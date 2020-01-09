import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Spinner} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Spinner', module);

stories.add(`default`, (): ReactElement => (
    <Spinner />
));
