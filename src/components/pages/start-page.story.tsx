import React, {ReactElement} from "react";
import {storiesOf} from '@storybook/react';
import {cn} from '../../../lib/classname';

import {CardsContainer} from "../cards-container/index";
import {Card} from "../card/index";
import {HeaderWithLogo} from "../header/index";
import {cards} from '../card/card.mock';

import {Menu, MenuEnum} from "../menu/index";
import './index.styl';

interface StartPageStory {
    userName: string;
    cards: Card[];
    activeMenu: MenuEnum
}

const b = cn('page');

export const StartPage = ({
    userName,
    cards,
    activeMenu,
}: StartPageStory) => (
    <>
        <div className={b()}>
            <HeaderWithLogo
                userName={userName}
            />
            <CardsContainer
                cards={cards}
                containerName={'Наборы'}
                onLinkClick={()=>{}}
            />
            <CardsContainer
                cards={cards}
                containerName={'Контрольные'}
                onLinkClick={()=>{}}
                className={'exam'}
            />
        </div>
        <Menu
            activeMenu={activeMenu}
        />
    </>
);

const stories = storiesOf('StartPage', module);

stories.add('default', (): ReactElement => (
    <StartPage
        userName={'Katerina'}
        cards={cards}
        activeMenu={MenuEnum.download}
    />
));

