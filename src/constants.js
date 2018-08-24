/**
 * @file constants
 * @author lihaizhu
 * @since 2018/08/04
 */
export const PAGE_SIZE = 10;

export const ERROR_MSG_DURATION = 3;
export const SUCCESS_MSG_DURATION = 1;

const API_PREFIX = '/api/';

export const API_ROOT = {
    home: `${API_PREFIX}home/`
};

export const METHOD = {
    get: 'GET',
    post: 'POST',
    delete: 'DELETE',
    put: 'PUT'
};
