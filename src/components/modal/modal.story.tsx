import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Modal} from './index';

import '../../constants/common.styl';

const stories = storiesOf('Modal', module);

stories.add('Modal default', (): ReactElement => (
    <Modal>
        <div>
            k;ljhk
        </div>
    </Modal>
));
