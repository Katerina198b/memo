import React from "react";
import {cn} from '../../../lib/classname';

import {Header} from "../header";

import {Menu, MenuEnum} from "../menu";
import './index.styl';
import {Timer} from "../timer";
import {Definition} from "../definition";
import {Direction, SwipeDefinition} from "../definition-swipe";
import {connect} from "react-redux";

interface StartPageStory {
    userName: string;
    definition: Definition;
    activeMenu: MenuEnum
}

const b = cn('page');

const CardPageViewer = ({
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

export const CardPage = connect(
    ({user: {userName}, cards, exams}) => ({userName, cards, exams}),
    () => {},
)(CardPageViewer);

