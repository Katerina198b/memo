import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {CardsContainer} from './index';
import {cards} from "../card/card.mock";

import '../../constants/common.styl';

const stories = storiesOf('Cards', module);

stories.add('Cards', (): ReactElement => (
    <CardsContainer
        cards={cards}
        containerName={'Наборы'}
    />
));
