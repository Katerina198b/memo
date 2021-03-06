import React, {ReactElement} from "react";
import {storiesOf} from '@storybook/react';

import {cards} from '../card/card.mock';

import {MenuEnum} from "../menu";
import './index.styl';
import {StartPage} from "./start-page";

const stories = storiesOf('StartPage', module);

stories.add('default', (): ReactElement => (
    <StartPage
        userName={'Katerina'}
        cards={cards}
        activeMenu={MenuEnum.download}
    />
));

