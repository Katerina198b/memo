import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Checkbox} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Checkbox', module);

stories.add(`Checkbox default`, (): ReactElement => (
    <Checkbox
        onClick={() => {}}
        active={false}
    />
));
