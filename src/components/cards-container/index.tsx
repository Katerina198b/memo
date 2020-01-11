import React from 'react';
import {cn} from '../../lib/classname';
import {Card} from '../card';
import {emptyCard} from '../card/card.mock';

import './index.styl';
import {ExamAddCard} from '../card/exam-add-card';

const b = cn('cards-container');

export enum CardType {
    exams = 'exams',
    default = 'default',
}


interface CardsContainerProps {
    cards: Card[];
    containerName: string;
    onLinkClick: () => void;
    className?: string;
    type: CardType
}

export const CardsContainer = ({
    cards,
    containerName,
    onLinkClick,
    type,
    className = '',
}: CardsContainerProps) => {

    const DopCard = () => {
        switch (type) {
            case CardType.default: {
                const allCard = cards.reduce((allCard, card) => {
                    allCard.count += card.count;
                    allCard.time += card.time;
                    allCard.progress += (card.progress / cards.length);
                    return allCard;
                }, emptyCard);

                return(
                    <Card key={allCard.id}
                          {...allCard}
                          className={className}
                    />
                )
            }
            case CardType.exams: {
                return(
                    <ExamAddCard />
                )
            }
        }
    };

    return(
        <div className={b()}>
            <div className={b('title')}>
                <h1 className={b('title-1')}>{containerName}</h1>
                <div
                    className={b('link')}
                    onClick={onLinkClick}
                >
                    Смотреть все
                </div>
            </div>
            <div className={b('cards')}>
                {cards.map((card) => (
                    <Card
                        {...card}
                        key={card.id}
                        className={className}
                        type={type}
                    />
                ))}
                {DopCard()}
            </div>
        </div>
    )
}

