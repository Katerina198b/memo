import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {AddButton} from './index';

import '../../constants/common.styl';

const stories = storiesOf('AddButton', module);

stories.add(`AddButton`, (): ReactElement => (
    <AddButton
        active={true}
    />
));
