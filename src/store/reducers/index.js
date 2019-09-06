import { combineReducers } from 'redux';
import {
    REQUEST_PAGES,
    RECEIVE_PAGES,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    SET_PAGE,
    SET_WINDOW
} from '../actions';

function content(
    state = {
        isFetching: false,
        items: []
    },
    action
) {
    switch(action.type) {
        case REQUEST_PAGES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_PAGES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.pages,
                lastUpdated: action.receivedAt
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

const selectedPage = (state = 'home', action) => {
    switch (action.type) {
        case SET_PAGE:
            return action.page
        default:
            return state
    }
}

function pages(state = {}, action) {
    switch(action.type) {
        case RECEIVE_PAGES:
        case REQUEST_PAGES:
            return Object.assign({}, state, content(state, action))
        default:
            return state;
    }
}

function posts(state = {}, action) {
    switch(action.type) {
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, content(state, action))
        default:
            return state;
    }
}

function window(state = {}, action) {
    switch(action.type) {
        case SET_WINDOW:
            return action.window
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedPage,
    pages,
    posts,
    window
});

export default rootReducer;