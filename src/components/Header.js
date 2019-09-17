import '../assets/sass/header.scss'
import React from 'react'
import { setImg } from '../store/utilities'
import Links from './Links'
import Services from './Services'
//import NavBar from './NavBar'
//className="split"
// axe, swords, trees, utensils-alt, wrench
export default ({ pages, links, services }) => {
    if (!pages) {
        return null
    }
    const featuredImage = setImg(pages, 'medium_large')
    let img = null
    if (featuredImage) {
        img = <img className="img-main" src={featuredImage} alt="NC HAMMER" />
    }

    return (
        <main>
            <section>
                {img}
                <div className="content-right">
                    <div className="hide-on-small-and-down">
                        <h3>{pages.acf.title}</h3>
                    </div>
                    <div className="absolute-hello hide-on-large-only hide-on-extra-large-only">
                        <p>{pages.acf.title}</p>
                    </div>
                    <Links links={links} />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: pages.content.rendered,
                        }}
                    />
                    <Services services={services} />
                    <div className="portfolio">
                        <a
                            href={pages.acf.portfolio_link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fad fa-wrench list-icon" />
                            {pages.acf.portfolio_text}
                        </a>
                    </div>
                    <div className="footer">&copy; 2018 Neil Carrodus</div>
                </div>
            </section>
        </main>
    )
}
