/**
 * Created by renjp on 2018/12/27.
 */
// Actions
export const types = {
    LOAD: 'article/LOAD',
    CREATE: 'article/CREATE',
    UPDATE: 'article/UPDATE',
    REMOVE: 'article/REMOVE'
};

const initialState = {
    listData: [],
    pageSize:5,
    isLoading: false,
};

// Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.LOAD:
            console.log("a :"+action);
            console.log("s :"+state);
         return {...state,isLoading:false };
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
    loadArticle: function (data) {
        return {type: types.LOAD,data};
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

