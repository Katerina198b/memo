import React, {useState} from 'react';
import {cn} from '../../../lib/classname';

import {Definition} from "../definition";
import {Card} from '../card';

import './index.styl';

const b = cn('definitions-container');

interface DefinitionsContainerProps {
    definitions: Definition[];
    card: Card;
    onClick: () => void;
}

export const DefinitionsContainer = ({
    definitions,
    card,
    onClick,
}: DefinitionsContainerProps) => {

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
        <div className={b()}>
            <div className={b('title', {background: card.background})}>
                <h1>{card.title}</h1>
                <div className={b('link')}
                     onClick={onClick}
                >
                    {checkedCards.size === 0 ? 'Тренировать все' : 'Тренировать выбранное'}
                </div>
            </div>
            <div className={b('definitions')}>
                {definitions.map((el) => (
                    <Definition {...el} key={el.id}
                                onClick={handleClick}
                    />
                ))}
            </div>
        </div>
    )
};
