import '../assets/sass/main.scss'
import neil from '../assets/img/neil-on-a-rock_sq.jpg'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <section>
                <div>
                    <img className="img-main" src={neil} alt="NC HAMMER" />
                </div>
                <div className="content-right">
                    <h3>SOME HEADER</h3>
                    <p>
                        Lick the curtain just to be annoying i'm bored inside,
                        let me out i'm lonely outside, let me in i can't make up
                        my mind whether to go in or out, guess i'll just stand
                        partway in and partway out, contemplating the universe
                        for half an hour how dare you nudge me with your
                        foot?!?! leap into the air in greatest offense!
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <img className="img-main" src={neil} alt="NC HAMMER" />
                </div>
                <div className="content-left">
                    <h3>SOME HEADER</h3>
                    <p>
                        Lick the curtain just to be annoying i'm bored inside,
                        let me out i'm lonely outside, let me in i can't make up
                        my mind whether to go in or out, guess i'll just stand
                        partway in and partway out, contemplating the universe
                        for half an hour how dare you nudge me with your
                        foot?!?! leap into the air in greatest offense!
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <img className="img-main" src={neil} alt="NC HAMMER" />
                </div>
                <div className="content-left">
                    <h3>SOME HEADER</h3>
                    <p>
                        Lick the curtain just to be annoying i'm bored inside,
                        let me out i'm lonely outside, let me in i can't make up
                        my mind whether to go in or out, guess i'll just stand
                        partway in and partway out, contemplating the universe
                        for half an hour how dare you nudge me with your
                        foot?!?! leap into the air in greatest offense!
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}
