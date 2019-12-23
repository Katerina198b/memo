import { Route, Switch, RouteComponentProps } from 'react-router-dom'
import {HeaderWithLogo} from "./header";
import {Menu, MenuEnum} from "./menu";
import {cn} from '../../lib/classname';
import React from 'react';

const b = cn('page');

export const App = () => {
    console.log('window', window);
    return (<Switch>
        <Route path="/"
               component={({match, location}: RouteComponentProps) => (
                   <div className={b()}>
                       <HeaderWithLogo
                           userName={'katerina198b'}
                       />
                       <Switch>
                           <Route exact path="/" component={() => (<div>fjfj</div>)}/>
                       </Switch>
                       <Menu
                           activeMenu={MenuEnum.download}
                       />
                   </div>
               )}/>
    </Switch>)
}
