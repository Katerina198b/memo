import React, {CSSProperties} from 'react';
import {cn} from '../../lib/classname';
import Check from './svg/check-done.svg?inline';

import './index.styl';

const b = cn('progress');

interface Progress {
    percent: number;
    className: string;
}

export const Progress = ({
    percent,
    className
}: Progress) => {
    const getStyle = () => {
        let right: CSSProperties = {};
        let base: CSSProperties = {};
        let left: CSSProperties = {
            transform: `rotate(${percent * 3.6}deg)`
        };
        if (percent <= 50) {
            right.display = 'none'
        } else {
            base.clip = 'rect(auto, auto, auto, auto)';
            right.transform = 'rotate(180deg)'
        }
        return {
            left,
            right,
            base
        }
    };

    const style = getStyle();

    return(
        <div className={b([className])}>
            <span className={b('label')}>{
                percent >= 100 ?
                    <svg viewBox={Check.viewBox}
                         className={b('done')}
                    >
                        <use xlinkHref={`#${Check.id}`} />
                    </svg>
                    : <>{Math.floor(percent)}<span className={b('percent')}>%</span></>
            }</span>
            <div className={b('base')} style={style.base}>
                <div className={b('left')} style={style.left}/>
                <div className={b('right')} style={style.right}/>
            </div>
            <div className="progress__empty"/>
        </div>
    );

};


