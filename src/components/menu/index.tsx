import React, {useState} from 'react';

import {AddButton} from "../add-button";
import {Modal} from "../modal";
import {CardForm} from '../card-form';
import {ModalNavigator} from "../modal-navigator";
import {cn} from '../../../lib/classname';

import Home from './svg/home.svg?inline';
import Check from './svg/check.svg?inline';
import Learn from './svg/learn.svg?inline';
import Profile from './svg/profile.svg?inline';


import './index.styl';
import {NavLink} from "react-router-dom";


const b = cn('menu');

export enum MenuEnum {
    home = 'home',
    learn = 'learn',
    profile = 'profile',
    check = 'check',
    download = 'download',
}

interface Menu{
    activeMenu: MenuEnum;
}

export const Menu = ({activeMenu}: Menu) => {
    const [active, setActive] = useState(false);
    const onAddButtonClick = () => {
        setActive(!active);
    };
   return (
    <>
        <Modal active={active}>
            <>
                <ModalNavigator
                    count={2}
                    active={1}
                    onClick={() => {}}
                />
                <CardForm />
            </>
        </Modal>
        <div className={b()}>
            <NavLink exact to={'/'}
                     className={b('item')} activeClassName={b('item', {active: true})}
            >
                <svg viewBox={Home.viewBox}>
                    <use xlinkHref={`#${Home.id}`} />
                </svg>
            </NavLink>
            <NavLink to={'/exams/add'}
                     className={b('item')} activeClassName={b('item', {active: true})}
            >
                <svg viewBox={Learn.viewBox}>
                    <use xlinkHref={`#${Learn.id}`} />
                </svg>
            </NavLink>
            <AddButton
                active={active}
                onClick={onAddButtonClick}
            />
            <NavLink to={'/definitions/all'} className={b('item')} activeClassName={b('item', {active: true})}>
                <svg viewBox={Check.viewBox}>
                    <use xlinkHref={`#${Check.id}`} />
                </svg>
            </NavLink>
            <NavLink to={'/user'}
                     className={b('item')} activeClassName={b('item', {active: true})}
            >
                <svg viewBox={Profile.viewBox}>
                    <use xlinkHref={`#${Profile.id}`} />
                </svg>
            </NavLink>
        </div>
    </>
   )
};
