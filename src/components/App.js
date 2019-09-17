import '../assets/sass/loader.scss'
import '../assets/sass/app.scss'
import React, { useContext, useEffect } from 'react'
import { Store } from '../store'
import { fetchWPData, fetchWPPages } from '../store/actions'
import Header from './Header'
import { alterWelcomeScreen, hideLoader } from '../store/utilities'

export default () => {
    const { state, dispatch } = useContext(Store)

    useEffect(
        () => {
            if (!navigator.onLine) {
                alterWelcomeScreen('offline')
            } else {
                if (
                    state.pages.data.length === 0 &&
                    !state.pages.isFetching &&
                    !state.pages.isError
                ) {
                    fetchWPPages(dispatch)
                }
                if (state.links.data.length === 0 && !state.links.isFetching) {
                    fetchWPData(dispatch, 'links')
                }
                if (
                    state.services.data.length === 0 &&
                    !state.services.isFetching
                ) {
                    fetchWPData(dispatch, 'services')
                }
            }
        },
        // dependency array
        [state, dispatch]
    )

    //console.log(state)
    if (state.pages.data.length > 0) {
        hideLoader()
    }

    // TRACE UPDATES TO STATE...
    //console.log(useTraceUpdate(state))
    //console.log(state)
    return (
        <div id="wrapper">
            <Header
                pages={state.pages.data.find(p => p.slug === 'home')}
                links={state.links}
                services={state.services}
            />
        </div>
    )
}
