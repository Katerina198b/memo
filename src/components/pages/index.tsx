import React, {ReactElement} from "react";
import {storiesOf} from '@storybook/react';
import {cn} from '../../lib/classname';

import {Card} from "../card";
import {Header, HeaderWithLogo} from "../header";
import {definitions} from '../definition/definition.mock';

import {Menu, MenuEnum} from "../menu";
import './index.styl';
import {Timer} from "../timer";
import {Definition} from "../definition";
import {Direction, SwipeDefinition} from "../definition-swipe";

interface StartPageStory {
    userName: string;
    definition: Definition;
    activeMenu: MenuEnum
}

const b = cn('page');

export const Index = ({
    userName,
    definition,
    activeMenu,
}: StartPageStory) => (
    <>
        <div className={b({type: 'definition'})}>
            <Header
                withBack
                title={'Учим'}
                onClose={() => {}}
            />
            <h1 className={b('title')}>{definition.title}</h1>
            <SwipeDefinition direction={Direction.left} />
            <SwipeDefinition direction={Direction.right} />
            <Timer />
        </div>
        <Menu
            activeMenu={activeMenu}
        />
    </>
);
