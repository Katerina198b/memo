import React from 'react';
import {renderToString} from "react-dom/server";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router";
import {App} from "./components/App";
import storeFactory from "./store";
import initialState from "../data/initialState";
const serverStore = storeFactory(true, initialState);

global.html =renderToString(
    <Provider store={serverStore}>
        <StaticRouter location={url} context={{}}>
            <App />
        </StaticRouter>
    </Provider>
);
