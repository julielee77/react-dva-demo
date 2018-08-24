/**
 * @file routes render
 * @author lihaizhu
 * @since 2018/06/04
 */

import React from 'react';
import {Switch, Redirect, Route} from 'dva/router';

const RouteWithSubRoutes = route => {
    return <Route path={route.path} render={props => <route.component {...props} route={route}/>}/>;
};

export default function SubPages({route, children, hide404}) {
    if (!route || !route.routes || !route.routes.length) {
        return null;
    }
    const {routes, redirect, path, location} = route;
    return (
        <Switch>
            {routes.map(item => <RouteWithSubRoutes key={item.path} {...item}/>)}
            {children}
            {redirect && <Redirect exact from={path} to={`${redirect}${location.search}`}/>}
            {!hide404 && <Redirect to="/404"/>}
        </Switch>
    );
}
