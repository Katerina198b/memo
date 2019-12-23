import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Color} from './index';

import '../../constants/common.styl';
import {CardBackground} from "../card/index";

const stories = storiesOf('Color', module);

stories.add(`Color`, (): ReactElement => (
    <Color
        background={CardBackground.pink}
    />
));
