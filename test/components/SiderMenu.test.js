/**
 * @file navbar test
 * @author lihaizhu
 * @since 2018/03/06
 */

import React from 'react';
import ReactDOM from 'react-dom';
import SiderMenu from '../../src/components/SiderMenu';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SiderMenu />, div);
    ReactDOM.unmountComponentAtNode(div);
});
