/**
 * @file basic layout
 * @author lihaizhu
 * @since 2018/06/07
 */

import React from 'react';
import {LocaleProvider} from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import SubPages from 'Src/components/SubPages';

export default function BasicLayout({route}) {
    return (
        <LocaleProvider locale={zhCN}>
            <SubPages route={route}/>
        </LocaleProvider>
    );
}
