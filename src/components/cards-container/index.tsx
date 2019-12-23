import React from 'react';
import {cn} from '../../../lib/classname';
import {Card} from '../card';
import {emptyCard} from '../card/card.mock';

import './index.styl';

const b = cn('cards-container');

interface CardsContainerProps {
    cards: Card[];
    containerName: string;
    onLinkClick: () => void;
    className?: string;
}

export const CardsContainer = ({
    cards,
    containerName,
    onLinkClick,
    className = '',
}: CardsContainerProps) => {
    const allCard = cards.reduce((allCard, card) => {
        allCard.count += card.count;
        allCard.time += card.time;
        return allCard;
    }, emptyCard);

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
                    />
                ))}
                <Card key={allCard.id}
                    {...allCard}
                    className={className}
                />
            </div>
        </div>
    )
}

