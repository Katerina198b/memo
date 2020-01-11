import React from "react";
import {connect} from "react-redux";
import {cn} from '../../lib/classname';

import {CardsContainer, CardType} from "../cards-container";
import {Card} from "../card";
import {HeaderWithLogo} from "../header";
import './index.styl';

interface StartPageStory {
    userName: string;
    cards: Card[];
    exams: Card[];
}

const b = cn('page');

const StartPageViewer = ({
  userName,
  cards,
  exams,
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
                type={CardType.default}
            />
            <CardsContainer
                cards={exams}
                containerName={'Контрольные'}
                onLinkClick={()=>{}}
                className={'exam'}
                type={CardType.exams}
            />
        </div>
    </>
);

export const StartPage = connect(
    ({user: {userName}, cards, exams}) => ({userName, cards, exams}),
    () => {},
)(StartPageViewer);
