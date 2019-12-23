import React, {useState} from "react";
import {cn} from '../../../lib/classname';

import {Card, CardBackground} from "../card";
import {Color} from "../color";
import {Button} from "../button";

import './index.styl';


const initialCard: Card = {
    count: 0,
    time: 0,
    title: '',
    background: CardBackground.grey,
    id: '',
};

const b = cn('form');

export const CardForm = () => {

    const [form, setForm] = useState(initialCard);
    return (
        <div className={b()}>
            <h1 className={b('title')}>Создайте свой набор</h1>
            <label> Название </label>
            <input value={form.title} />
            <label> Документ с определениями выделенными цветом или начертанием </label>
            <div className="file-upload">
                <div className="file-select">
                    <div className="file-select-button" id="fileName">Выберите файл</div>
                    <div className="file-select-name" id="noFile">Файл не выбран...</div>
                    <input type="file" name="chooseFile" id="chooseFile" />
                </div>
            </div>
            <div className={b('color-container')}>
                {Object.keys(CardBackground).map((background: CardBackground) =>
                    <Color
                        background={background}
                        key={background}
                        checked={form.background === background}
                        onClick={() => setForm({...form, background})}
                    />
                )}
            </div>
            <Button onClick={()=>{}}>Сохранить</Button>
        </div>
    )
};

