import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {DefinitionsContainer} from './index';
import {cards} from '../card/card.mock';

import '../../constants/common.styl';

const stories = storiesOf('Definitions', module);

stories.add('Definitions default', (): ReactElement => (
    <DefinitionsContainer
        card={cards[0]}
        onClick={() => {}}
    />
));
