/**
 * @file 路由
 * @author lihaizhu
 * @since 2018/03/15
 */
import React from 'react';
import {Router} from 'dva/router';
import SubPages from 'Src/components/SubPages';
import {getRouterData} from './routeConfig';

export default function RouterConfig({history, app}) {
    const route = getRouterData(app);

    return (
        <Router history={history}>
            <SubPages route={route} />
        </Router>
    );
}
