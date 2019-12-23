import {cn} from '../../../lib/classname';
import {Icon, IconType} from '../icon';
import React from 'react';

import './index.styl';

interface HeaderProps {
    onClose: () => void;
    withBack: boolean;
    title: string;
}

const b = cn('header');

export const Header = ({
    title,
    withBack,
    onClose,

}: HeaderProps) => (
    <div className={b()}>
        <Icon
            color='black'
            type={IconType.back}
            onClick={() => {}}
        />
        <h1 className={b('title')}>{title}</h1>
        <Icon
            color='black'
            type={IconType.close}
            onClick={onClose}
        />
    </div>
);

interface HeaderWithLogo {
    userName: string;

}

export const HeaderWithLogo = ({userName}: HeaderWithLogo) => (
    <div className={b({'with-logo': true})}>
        <div className={b('title')}>
            <h1 className={b('hello')}>Привет,</h1>
            <h2 className={b('username')}>{userName}!</h2>
            <p className={b('level')}>
                100 слов <br/>
                10 контрольных
            </p>
        </div>
    </div>
);
