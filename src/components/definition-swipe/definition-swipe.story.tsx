import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Direction, SwipeDefinition} from './index';

import '../../constants/common.styl';

const stories = storiesOf('SwipeDefinition', module);

stories.add(`default`, (): ReactElement => (
    <>
        <SwipeDefinition direction={Direction.left}/>
        <SwipeDefinition direction={Direction.right}/>
    </>
));
