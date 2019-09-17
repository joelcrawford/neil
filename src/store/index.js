import React, { createContext, useReducer } from 'react'
import { reducer } from './reducers'

export const Store = createContext()

const initialState = {
    pages: { data: [], isFetching: false, isError: false },
    posts: { data: [], isFetching: false },
    links: { data: [], isFetching: false },
    services: { data: [], isFetching: false },
    isError: false,
}

export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = { state, dispatch }

    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
