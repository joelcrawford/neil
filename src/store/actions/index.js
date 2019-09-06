import axios from 'axios'

const node = 'http://157.230.145.18/neil/'
const apiURL = 'wp-json/wp/v2/'

export const SET_PAGE = 'SET_PAGE'
export const setPage = page => ({
    type: SET_PAGE,
    page,
})

export const SET_WINDOW = 'SET_WINDOW'
export const setWindow = window => ({
    type: SET_WINDOW,
    window,
})

/* ******************************************
PAGES
wp pages for content pages (about, preservation)
********************************************/
export const REQUEST_PAGES = 'REQUEST_PAGES'
function requestPages() {
    return {
        type: REQUEST_PAGES,
    }
}

export const RECEIVE_PAGES = 'RECEIVE_PAGES'
function receivePages(json) {
    return {
        type: RECEIVE_PAGES,
        pages: json, //.filter(child => child.acf.language === lang), //.data.children.map(child => child.data),
        receivedAt: Date.now(),
    }
}

export const fetchPages = () => {
    return dispatch => {
        dispatch(requestPages())
        return axios(`${node}${apiURL}pages?_embed`)
            .then(
                response => response.json(),
                error => console.error('An error ', error)
            )
            .then(json => {
                // do NOT receivePages until there are pages!
                // ORDER THE PAGES by acf.menu_order
                console.log(json)
                dispatch(receivePages(json))
            })
    }
}

/* ******************************************
POSTS
wp posts for home page content
********************************************/
export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
    return {
        type: REQUEST_POSTS,
    }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        posts: json, //.map(child => child.items),
        receivedAt: Date.now(),
    }
}

export const fetchPosts = () => {
    return dispatch => {
        dispatch(requestPosts())
        return axios(`${node}${apiURL}posts?_embed`)
            .then(
                response => response.json(),
                error => console.error('An error ', error)
            )
            .then(json => dispatch(receivePosts(json)))
    }
}
