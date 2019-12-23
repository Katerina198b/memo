import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {DefinitionsContainer} from './index';
import {definitions} from "../definition/definition.mock";
import {cards} from '../card/card.mock';

import '../../constants/common.styl';

const stories = storiesOf('Definitions', module);

stories.add('Definitions default', (): ReactElement => (
    <DefinitionsContainer
        definitions={definitions}
        card={cards[0]}
        onClick={() => {}}
    />
));
