import React, {ReactElement} from "react";
import {storiesOf} from '@storybook/react';

import {definitions} from '../definition/definition.mock';

import {MenuEnum} from "../menu";
import './index.styl';
import {DefinitionPage} from "./definition-page";

const stories = storiesOf('DefinitionPage', module);

stories.add('default', (): ReactElement => (
    <DefinitionPage
        userName={'Katerina'}
        definition={definitions[0]}
        activeMenu={MenuEnum.download}
    />
));

