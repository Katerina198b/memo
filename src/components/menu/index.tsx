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
            <svg viewBox={Home.viewBox}
                 className={b('item', {active: activeMenu === MenuEnum.home})}
            >
                <use xlinkHref={`#${Home.id}`} />
            </svg>
            <svg viewBox={Learn.viewBox}
                className={b('item', {active: activeMenu === MenuEnum.learn})}
            >
                <use xlinkHref={`#${Learn.id}`} />
            </svg>
            <AddButton
                active={active}
                onClick={onAddButtonClick}
            />
            <svg viewBox={Check.viewBox}
                 className={b('item', {active: activeMenu === MenuEnum.check})}
            >
                <use xlinkHref={`#${Check.id}`} />
            </svg>
            <svg viewBox={Profile.viewBox}
                 className={b('item', {active: activeMenu === MenuEnum.profile})}
            >
                <use xlinkHref={`#${Profile.id}`} />
            </svg>
        </div>
    </>
   )
};
