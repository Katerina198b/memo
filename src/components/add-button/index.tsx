import React from 'react';
import {cn} from '../../lib/classname';

import './index.styl';

interface AddButton {
    active: boolean;
    onClick: () => void;
}

const b = cn('add-button');

export const AddButton = ({
    onClick,
    active,
}: AddButton) => {
    return (
        <div className={b()}
             onClick={onClick}
        >
            <input type="checkbox"
                   checked={!active}
            />
            <div>
                <span/>
                <span/>
            </div>
        </div>
    )
};
