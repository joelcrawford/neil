import '../assets/sass/header.scss'
import neil from '../assets/img/neil-on-a-rock_sq.jpg'
import React from 'react'
//import NavBar from './NavBar'
//className="split"
// axe, swords, trees, utensils-alt, wrench
export default () => {
    return (
        <section>
            <img className="img-main" src={neil} alt="NC HAMMER" />
            <div className="valign-wrapper">
                <div className="content-header">
                    {/* <i className="fad fa-hammer" /> */}
                    <div className="absolute-hello">
                        <i className="fad fa-wrench fa-flip-horizontal" />
                        <p>Hi, I'm Neil.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
