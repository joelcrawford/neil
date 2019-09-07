import '../assets/sass/header.scss'
import neil from '../assets/img/neil-on-a-rock_sq.jpg'
import React from 'react'
//import NavBar from './NavBar'
//className="split"
export default () => {
    return (
        <section>
            <div>
                <img className="img-main" src={neil} alt="NC HAMMER" />
            </div>
            <div className="valign-wrapper">
                <div className="content-header">
                    <i className="fad fa-hammer fa-flip-horizontal fa-2x absolute-hammer" />
                    <p className="absolute-hello">Hi, I'm Neil.</p>
                </div>
            </div>
        </section>
    )
}
