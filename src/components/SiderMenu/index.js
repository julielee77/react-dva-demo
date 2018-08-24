/**
 * @file SiderMenu component
 * @author lihaizhu
 * @since 2018/5/15
 */

import React from 'react';
import {Link} from 'dva/router';
import {Layout, Menu, Icon} from 'antd';
import styles from './index.less';

const Sider = Layout.Sider;

export default class SiderMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state.selectKeys = this.calSelectedKeys(this.props.location.pathname);

        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        selectKeys: []
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectKeys: this.calSelectedKeys(nextProps.location.pathname)
        });
    }

    calSelectedKeys(pathname) {
        const menuData = this.props.menuData || [];
        const selectedItem = menuData.find(d => pathname.startsWith(d.key));
        return selectedItem && [selectedItem.key];
    }

    handleClick({key}) {
        this.setState({
            selectKeys: this.calSelectedKeys(key)
        });
    }

    renderDefault() {
        const menuData = this.props.menuData || [];
        return menuData.map(d => {
            return (
                <Menu.Item key={d.key}>
                    <Link to={d.key}>
                        {d.icon && <Icon type={d.icon} />}
                        {d.name}
                    </Link>
                </Menu.Item>
            );
        });
    }

    render() {
        const {children, type = 'default'} = this.props;
        return (
            <Sider>
                <Menu
                    model="inline"
                    className={styles['sider-menu']}
                    selectedKeys={this.state.selectKeys}
                    onClick={this.handleClick}
                >
                    {type === 'default' && this.renderDefault()}
                    {type !== 'default' && children}
                </Menu>
            </Sider>
        );
    }
}
