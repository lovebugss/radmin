/**
 * Created by renjp on 2018/12/27.
 */
// Actions
export const types = {
    LOAD: 'article/LOAD',
    LOAD_DONE: 'article/LOAD_DON',
    CREATE: 'article/CREATE',
    UPDATE: 'article/UPDATE',
    REMOVE: 'article/REMOVE'
};

const initialState = {
    dataList: [],
    pageSize:0,
    isLoading: true,
};

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD_DONE:
            console.log("a :"+action);
            console.log("s :"+state);
         return {...state,...action.data };
        case types.CREATE:
        //...
        case types.UPDATE:
        //...
        case types.REMOVE:
        //...
        default:
            return state;
    }
};

// Action Creators
export const actions = {
    loadArticle: function () {
        return {type: types.LOAD};
    },
    loadDone:function (data) {
        return {type: types.LOAD_DONE,data};
    },
    createArticle: function (article) {
        return {type: types.CREATE, article};
    },
    updateArticle: function (article) {
        return {type: types.UPDATE, article};
    }
    ,
    removeArticle: function (article) {
        return {type: types.REMOVE, article};
    }
};

