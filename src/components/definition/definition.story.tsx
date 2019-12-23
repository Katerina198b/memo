import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Definition} from './index';
import {definitionLevels} from './definition.mock';

import '../../constants/common.styl';

const stories = storiesOf('Definition', module);

definitionLevels.forEach(definition => (
    stories.add(`Definition ${definition.level}`, (): ReactElement => (
        <Definition
            {...definition}
        />
    ))
));
