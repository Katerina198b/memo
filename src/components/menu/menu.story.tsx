import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Menu, MenuEnum} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Menu', module);

stories.add('Menu default', (): ReactElement => (
    <Menu activeMenu={MenuEnum.profile}/>
));
