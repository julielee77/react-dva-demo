/**
 * @file basic layout
 * @author lihaizhu
 * @since 2018/06/07
 */

import React from 'react';
import SubPages from 'Src/components/SubPages';

export default function BasicLayout({route}) {
    return (
        <div>
            <SubPages route={route}/>
        </div>
    );
}
