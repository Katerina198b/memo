import React, {ReactElement} from 'react';
import {storiesOf} from '@storybook/react';
import {Card} from './index';
import {cards} from './card.mock';

import '../../constants/common.styl';

const stories = storiesOf('Card', module);

cards.forEach(card => (
    stories.add(`Card ${card.background}`, (): ReactElement => (
        <Card
            count={card.count}
            time={card.time}
            title={card.title}
            background={card.background}
        />
    ))
));
