/**
 * Created by renjp on 2018/12/27.
 */
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {types, actions} from '../reducers/article';
import {get} from '../util/fetch';
import {actionsTypes as IndexActionTypes} from '../reducers'

const {loadDone} = actions;

export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
function* fetchArticle(action) {


    let listData = {
        dataList: [{
            id: 1,
            href: '/topic',
            title: `JAVA`,
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
            description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
            content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
        }, {
            id: 2,
            href: '/topic',
            title: `assdf`,
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
            description: 'dfasdf.',
            content: 'diples, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
        },
            {
                id: 1,
                href: '/topic',
                title: `JAVA`,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
            }, {
                id: 2,
                href: '/topic',
                title: `assdf`,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: 'dfasdf.',
                content: 'diples, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
            },
            {
                id: 1,
                href: '/topic',
                title: `JAVA`,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
            }, {
                id: 2,
                href: '/topic',
                title: `assdf`,
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
                description: 'dfasdf.',
                content: 'diples, practical patterns and high quality design resources (Sketch and Axure), We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series ofWe supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure),We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), design principles, practical patterns and high quality design resources (Sketch and Axure),to help people create their product prototypes beautifully and efficiently.',
            }],
        pageSize: 5,
        isLoading: false,
    };
    yield put({type: IndexActionTypes.FETCH_START});
         // yield call(delay, 500)
    try {
        yield put(loadDone(listData));
    } catch (Execption) {

    } finally {
        yield put({type: IndexActionTypes.FETCH_END});
    }

}


export function* articleSaga(listData) {
    yield takeEvery(types.LOAD, fetchArticle);
};