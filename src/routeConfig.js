/**
 * @file 路由数据
 * @author lihaizhu
 * @since 2018/3/15
 */

import {createElement} from 'react';
import dynamic from 'dva/dynamic';

const modelNotExisted = (app, model) =>
    // eslint-disable-next-line
    !app._models.some(({namespace}) => {
        return namespace === model.substring(model.lastIndexOf('/') + 1);
    });
// wrapper of dynamic
const dynamicWrapper = (app, models, component) => {
    // () => require('module')
    // transformed by babel-plugin-dynamic-import-node-sync
    if (component.toString().indexOf('.then(') < 0) {
        models.forEach(model => {
            if (modelNotExisted(app, model)) {
                // eslint-disable-next-line
                app.model(require(`./models/${model}`).default);
            }
        });
        return props => createElement(component().default, props);
    }
    // () => import('module')
    return dynamic({
        app,
        models: () => models.filter(model => modelNotExisted(app, model)).map(m => import(`./models/${m}.js`)),
        // add routerData prop
        component: () => {
            return component().then(raw => props => createElement(raw.default || raw, props));
        }
    });
};

export const getRouterData = app => {
    /**
     * @param path {String} 路由地址
     * @param component {React.Component} 该路由渲染的组件
     * @param public {boolean} OPTIONAL: 是否公开权限
     * @param redirect {String} OPTIONAL: 重定向地址
     * @param routes {Array} 子路由列表
     */
    return {
        routes: [
            {
                path: '/404',
                component: dynamicWrapper(app, [], () => import('./pages/404'))
            },
            {
                path: '/',
                redirect: '/home',
                component: dynamicWrapper(app, ['home'], () => import('./pages/Layout')),
                routes: [
                    {
                        path: '/home',
                        component: dynamicWrapper(app, [], () => import('./pages/Home'))
                    }
                ]
            }
        ]
    };
};
