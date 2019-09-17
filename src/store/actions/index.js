import * as types from '../types'
import { alterWelcomeScreen } from '../utilities'

const ip = 'http://157.230.145.18/neil/'
const wpRest = 'wp-json/wp/v2/'

const wpPostTypes = [
    { id: 'pages', url: 'pages?_embed' },
    { id: 'posts', url: 'posts?_embed' },
    { id: 'links', url: 'links' },
    { id: 'services', url: 'services' },
]

export const fetchWPData = async (dispatch, type) => {
    const t = wpPostTypes.find(t => t.id === type)

    const actionName = `FETCH_${t.id.toUpperCase()}`
    const reqName = `REQUEST_${t.id.toUpperCase()}`

    const controller = new AbortController()
    const signal = controller.signal
    setTimeout(() => controller.abort(), 5000) // this getting called is like user aborted

    dispatch({ type: types[reqName] })

    try {
        const request = await fetch(`${ip}${wpRest}${t.url}`, { signal })

        if (!request.ok) {
            throw Error(request.statusText)
        }
        const data = await request.json()

        return dispatch({
            type: types[actionName],
            payload: data,
        })
    } catch (error) {
        console.log('error', error)
        //alterWelcomeScreen('error')
        //return dispatch({type: types.FETCH_PAGES_ERROR})
    }
}

function abortableFetch(request, opts) {
    const controller = new AbortController()
    const signal = controller.signal
    setTimeout(() => controller.abort(), 5000)

    return {
        abort: () => controller.abort(),
        ready: fetch(request, { ...opts, signal }),
    }
}

export const fetchWPPages = async dispatch => {
    const wpPages = 'pages?_embed'
    dispatch({ type: types.REQUEST_PAGES })

    try {
        const request = await abortableFetch(`${ip}${wpRest}${wpPages}`)
        const response = await request.ready

        if (response.status !== 200) {
            throw new Error(response.status)
        }

        let data = await response.json()

        return dispatch({
            type: types.FETCH_PAGES,
            payload: data,
        })
    } catch (error) {
        alterWelcomeScreen('error')
        return dispatch({ type: types.FETCH_PAGES_ERROR })
    }
}
