import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {CardsContainer} from './index';

import '../../constants/common.styl';
import {initialState} from "../../data/initialState";

const stories = storiesOf('Cards', module);

stories.add('Cards', (): ReactElement => (
    <CardsContainer
        cards={initialState.cards}
        containerName={'Наборы'}
    />
));
