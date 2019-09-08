import '../assets/sass/header.scss'
import neil from '../assets/img/neil-on-a-rock_sq.jpg'
import React from 'react'
//import NavBar from './NavBar'
//className="split"
// axe, swords, trees, utensils-alt, wrench
export default () => {
    return (
        <main>
            <section>
                <img className="img-main" src={neil} alt="NC HAMMER" />

                <div className="content-right">
                    <div className="hide-on-small-and-down">
                        <h3>Hi, I'm Neil.</h3>
                    </div>
                    <div className="absolute-hello hide-on-large-only hide-on-extra-large-only">
                        <p>Hi, I'm Neil.</p>
                    </div>
                    <ul className="icons">
                        <li>
                            <a href="#!" className="icon style2 fa-twitter">
                                <span className="label">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="icon style2 fa-facebook">
                                <span className="label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="icon style2 fa-instagram">
                                <span className="label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="icon style2 fa-500px">
                                <span className="label">500px</span>
                            </a>
                        </li>
                        <li>
                            <a href="#!" className="icon style2 fa-envelope-o">
                                <span className="label">Email</span>
                            </a>
                        </li>
                    </ul>
                    <p>
                        This is the thing that I do. Lick the curtain just to be
                        annoying i'm bored inside, let me out i'm lonely
                        outside, let me in i can't make up my mind whether to go
                        in or out, guess i'll just stand partway in and partway
                        out, contemplating the universe for half an hour how
                        dare you nudge me with your foot?!?! leap into the air
                        in greatest offense!
                    </p>
                    <ul className="list-header">
                        <li>
                            <i className="fad fa-cookie-bite list-icon" />
                            <span>This and that.</span>
                        </li>
                        <li>
                            <i className="fad fa-cookie-bite list-icon" />
                            <span>This and that.</span>
                        </li>
                        <li>
                            <i className="fad fa-cookie-bite list-icon" />
                            <span>This and that.</span>
                        </li>
                    </ul>
                    <div className="portfolio">
                        <a href="#!">
                            <i className="fad fa-wrench list-icon" />
                            View my portfolio here.
                        </a>
                    </div>
                    <div>© 2018 Neil Carrodus</div>
                </div>
            </section>
        </main>
    )
}
