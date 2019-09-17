import 'materialize-css/dist/css/materialize.min.css'
import './assets/sass/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './store'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

const Root = () => {
    return (
        <React.StrictMode>
            <StoreProvider>
                <App />
            </StoreProvider>
        </React.StrictMode>
    )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
