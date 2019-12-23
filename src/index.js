import React from 'react'
import { hydrate, render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {App} from './components/App'
import storeFactory from './store'
import './constants/common.styl'

const store = storeFactory(false, window.__INITIAL_STATE__);

window.React = React;
window.store = store;

console.log('rendered from here...');
/*
React expects that the rendered content is identical between the server and the client.
It can patch up differences in text content, but you should treat mismatches as bugs and fix them.
In development mode, React warns about mismatches during hydration.
There are no guarantees that attribute differences will be patched up in case of mismatches.
This is important for performance reasons because in most apps, mismatches are rare,
and so validating all markup would be prohibitively expensive.
 */
render(
    <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('react-container')
);
