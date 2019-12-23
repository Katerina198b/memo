import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Header, HeaderWithLogo} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Header', module);

stories.add('Header default', (): ReactElement => (
    <Header
        onClose={action('onClose')}
        withBack={true}
        title={'Title'}
    />
));

stories.add('Header with logo', (): ReactElement => (
    <HeaderWithLogo
        userName={'Katerina'}
    />
));
