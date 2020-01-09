import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Card, TextColor} from './index';

import '../../constants/common.styl';
import {initialState} from "../../../data/initialState";

const stories = storiesOf('Card', module);

initialState.cards.forEach(card => (
    stories.add(`Card ${card.background}`, (): ReactElement => (
        <Card
            count={card.count}
            time={card.time}
            title={card.title}
            background={card.background}
            color={TextColor.white}
            progress={16}
        />
    ))
));
