import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {DefinitionCard} from './index';
import {definitions} from "../definition/definition.mock";

import '../../constants/common.styl';

const stories = storiesOf('DefinitionCard', module);

stories.add(`default`, (): ReactElement => (
    <DefinitionCard
        definition={definitions[0]}
    />
));
