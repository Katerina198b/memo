import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {storeFactory} from './store'
import './constants/common.styl'
import {Menu, MenuEnum} from "./components/menu";
import {cn} from "../lib/classname";
import {StartPage} from "./components/pages/start-page";
import {initialState} from '../data/initialState'
import {createStore} from "redux";
import {DefinitionPage} from "./components/pages/definition-page";

const store = createStore(() => initialState, initialState);

window.React = React;
window.store = store;

console.log('rendered from here...', store.getState(), 'll');
const b = cn('page');
/*
React expects that the rendered content is identical between the server and the client.
It can patch up differences in text content, but you should treat mismatches as bugs and fix them.
In development mode, React warns about mismatches during hydration.
There are no guarantees that attribute differences will be patched up in case of mismatches.
This is important for performance reasons because in most apps, mismatches are rare,
and so validating all markup would be prohibitively expensive.
 */
render(
    <div className={b()}>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={StartPage} />
                    <Route path="/card/:id" component={DefinitionPage} />
                    <Route path="/definition/:id" component={DefinitionPage} />
                </Switch>
                <Menu
                    activeMenu={MenuEnum.download}
                />
            </BrowserRouter>
        </Provider>
    </div>,
    document.getElementById('react-container')
);
