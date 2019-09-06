import React from 'react'
import logo from '../assets/img/logo.svg'
import '../assets/scss/App.scss'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer />
        </React.Fragment>
    )
}

export default App
