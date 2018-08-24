/**
 * @file home model
 *      model example
 * @author lihaizhu
 * @since 2018/08/04
 */

import * as homeSrv from 'Src/services/home';
import {isSuccess} from 'Src/utils/request';

export default {
    namespace: 'home',

    state: {
        data: null
    },

    reducers: {
        save(state, {payload}) {
            return {...state, ...payload};
        }
    },

    effects: {
        * fetch(action, {call, put}) {
            const response = yield call(homeSrv.fetch);
            if (isSuccess(response)) {
                yield put({
                    type: 'save',
                    payload: {
                        data: response.content
                    }
                });
            }
        }
    }
};
