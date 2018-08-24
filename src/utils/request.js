/**
 * @file util request
 * @author lihaizhu
 * @since 2018/08/04
 */
import fetch from 'dva/fetch';
import {message} from 'antd';
import {SUCCESS_MSG_DURATION, ERROR_MSG_DURATION} from 'Src/constants';

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {Object} options  需要传递的参数； GET时 options 可不传，默认为 {}
 * @param  {string} options.method  POST, DELETE, GET, PUT详见 src/constants.METHORD
 * @param  {Object} options.body  需要传递给后端的参数，例如{id: 1}
 * @param  {boolean} tipSuccess false:不显示更新成功  true: 显示更新成功
 * @param  {boolean} tipError false:不显示错误信息  true: 提示错误
 * @return {Object} data
 */
export default async function request(url, options = {}, tipSuccess = false, tipError = true) {
    const newOptions = {credentials: 'include', ...options};
    if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
        newOptions.headers = {
            'Content-Type': 'application/json; charset=utf-8',
            ...newOptions.headers
        };
    }

    if (typeof newOptions.body === 'object') {
        newOptions.body = JSON.stringify(newOptions.body);
    }

    const response = await fetch(url, newOptions);

    // json file
    if (url.endsWith('.json')) {
        return response.json();
    }

    if (!response.ok && tipError) {
        message.error(response.statusText, ERROR_MSG_DURATION);
        return;
    }

    try {
        const data = await response.json();

        if (data && 'code' in data) {
            const code = data.code;
            if (code === 0) {
                if (tipSuccess) {
                    message.success('操作成功', SUCCESS_MSG_DURATION);
                }
            } else if (tipError) {
                message.error(data.message, ERROR_MSG_DURATION);
            }
        }
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

export function isSuccess(response) {
    return response && response.code === 0;
}
