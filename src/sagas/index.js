/**
 * Created by ren on 2018/12/26.
 */
import {fork} from 'redux-saga/effects'
import {articleSaga} from './article'

export default function* rootSaga() {
    yield fork(articleSaga);
}