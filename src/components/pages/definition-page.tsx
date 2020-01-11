import React from "react";
import {connect} from "react-redux";
import {Header} from "components/header";
import {Timer} from "components/timer";
import {Direction, SwipeDefinition} from "components/definition-swipe";

import {cn} from 'lib/classname';

import './index.styl';

interface DefinitionPageViewer {
    current: number;
    selected: string[];
    history: any;
    id: string;
}

const b = cn('page');

const DefinitionPageViewer = ({
    selected,
    current,
    history,
    id,
}: DefinitionPageViewer) => {

    const swipeLeft = () => {
        if (current < selected.length) {
            history.push(`/card/${id}/train/${current + 1}`);
        }
    };

    const swipeRight = () => {
        if (current < selected.length) {
            history.push(`/card/${id}/train/${current + 1}`);
        }
    };

    console.log(current, history);

    return (
        <>
            <div className={b({type: 'definition'})}>
                <Header
                    withBack
                    title={'Учим'}
                    onClose={() => {
                    }}
                />
                <h1 className={b('title')}>{selected[current].title}</h1>
                <SwipeDefinition direction={Direction.left} onClick={swipeLeft} />
                <SwipeDefinition direction={Direction.right} onClick={swipeRight} />
                <Timer id={selected[current].id}/>
            </div>
        </>
    );
};

export const DefinitionPage = connect(
    ({user: {userName}, cards, exams}, {match}) => {
        const card = cards.find((card) => card.id === match.params.id);
        const selected = card.definitions.filter((item) => card.selected.some((id) => id === item.id));
        return {selected, current: Number(match.params.current), id: card.id};
    },
    () => {},
)(DefinitionPageViewer);

