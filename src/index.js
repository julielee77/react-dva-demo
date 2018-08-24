/**
 * @file index 入口
 * @author lihaizhu
 */
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import {message} from 'antd';
import warning from 'warning';
import './index.less';
import router from './router';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
    history: createHistory(),
    onError(e) {
        message.error(e.message, ERROR_MSG_DURATION);
        warning(true, 'there is an error about effect or subscript');
    }
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js

// 4. Router
app.router(router);

// 5. start
app.start('#root');
