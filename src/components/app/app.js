import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header'
import {HomePage, CartPage} from '../pages';

export default class App extends Component {
    
    render(){
        return(
            <main role='main' className='container'>
                <ShopHeader numItems={5} total={210} />
                <Switch>
                    <Route 
                        path="/" 
                        component={HomePage}
                        exact/>
                    <Route 
                        path="/Cart" 
                        component={CartPage}/>
                </Switch>
            </main>
        )
    }
} 