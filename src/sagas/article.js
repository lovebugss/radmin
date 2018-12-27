/**
 * Created by renjp on 2018/12/27.
 */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {types,actions} from '../reducers/article';

const {loadArticle} = actions;

function* fetchArticle(action) {
    console.log("fetchArticle")
    console.log(action)
    let listData = [{
        id: 1,
        href: '/topic',
        title: `JAVA`,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
    },{
        id: 2,
        href: '/topic',
        title: `assdf`,
        avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
        description: 'dfasdf.',
        content: 'diples, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
    }];
    yield put(loadArticle(listData));
}


export function* articleSaga(listData) {
    yield takeLatest(types.LOAD, fetchArticle);
};