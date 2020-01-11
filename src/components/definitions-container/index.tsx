import React, {useState} from 'react';
import {cn} from '../../lib/classname';

import {Definition} from "../definition";
import {Card} from '../card';

import './index.styl';
import {Link} from 'react-router-dom';

const b = cn('definitions-container');

interface DefinitionsContainerProps {
    card: Card;
    onClick: () => void;
}

export const DefinitionsContainer = ({
    card,
    onClick,
}: DefinitionsContainerProps) => {
    console.log('card', card.selected);
    const [checkedCards, setCheckedCards] = useState(new Set());

    const handleClick = (id: string) => {
        const cards = new Set([...checkedCards]);
        if (cards.has(id)) {
            cards.delete(id);
            setCheckedCards(cards);
            return;
        }
        cards.add(id);
        setCheckedCards(cards);
    };

    return(
        <div className={b({color: card.color})}>
            <div className={b('title', {background: card.background})}>
                <div className={b('info')}>
                    <h1>{card.title}</h1>
                    <div className={b('about')}>выучено на {card.progress}%, {card.count} понятий</div>
                </div>
                <Link className={b('link')}
                     onClick={onClick}
                     to={`/card/${card.id}/train/0`}
                >
                    {checkedCards.size === 0 ? 'Тренировать все' : 'Тренировать выбранное'}
                </Link>
            </div>
            <div className={b('definitions')}>
                {card.definitions.map((el) => (
                    <Definition {...el} key={el.id}
                                onClick={handleClick}
                                checked={card.selected.some((id) => id === el.id)}
                    />
                ))}
            </div>
        </div>
    )
};
