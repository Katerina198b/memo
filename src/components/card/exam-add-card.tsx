import React from 'react';
import {cn} from '../../lib/classname';
import {Link} from "react-router-dom";
import {CardBackground, TextColor} from "./index";

import './index.styl';

const b = cn('card');

export const ExamAddCard = () => (
    <Link className={b({background: CardBackground.fiolet, color: TextColor.black})}
          to={`add-exam`}
    >
        <div className={b('add')}>
            <h1 className={b('title')}>Добавить контрольную</h1>
            <div className={b('description')}>Загрузи учебник, список вопросов и получи ответы</div>
        </div>
    </Link>
);
