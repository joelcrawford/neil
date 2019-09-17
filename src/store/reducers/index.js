import * as types from '../types'
export function reducer(state, action) {
    switch (action.type) {
        case types.FETCH_PAGES:
            return {
                ...state,
                pages: Object.assign({}, state.pages, {
                    data: action.payload,
                    isFetching: false,
                    isError: false,
                }),
            }

        case types.FETCH_POSTS:
            return {
                ...state,
                posts: Object.assign({}, state.posts, {
                    data: action.payload,
                    isFetching: false,
                }),
            }
        case types.FETCH_LINKS:
            return {
                ...state,
                links: Object.assign({}, state.links, {
                    data: action.payload,
                    isFetching: false,
                }),
            }
        case types.FETCH_SERVICES:
            return {
                ...state,
                services: Object.assign({}, state.services, {
                    data: action.payload,
                    isFetching: false,
                }),
            }

        case types.REQUEST_PAGES:
            return {
                ...state,
                pages: Object.assign({}, state.pages, { isFetching: true }),
            }
        case types.REQUEST_POSTS:
            return {
                ...state,
                posts: Object.assign({}, state.posts, { isFetching: true }),
            }
        case types.REQUEST_LINKS:
            return {
                ...state,
                links: Object.assign({}, state.links, { isFetching: true }),
            }
        case types.REQUEST_SERVICES:
            return {
                ...state,
                services: Object.assign({}, state.services, {
                    isFetching: true,
                }),
            }
        case types.FETCH_PAGES_ERROR:
            return {
                ...state,
                pages: Object.assign({}, state.pages, {
                    isFetching: false,
                    isError: true,
                }),
            }

        default:
            return state
    }
}

// need to figure out how selectors work, how to implement them
export const getPages = state => state.pages
export const getPosts = state => state.posts
