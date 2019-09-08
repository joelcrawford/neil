import '../assets/sass/main.scss'
import neil from '../assets/img/neil-on-a-rock_sq.jpg'
import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <section>
                <img className="img-main" src={neil} alt="NC HAMMER" />

                <div className="content-right">
                    <h3>i can't make up my mind</h3>
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
                <img className="img-main" src={neil} alt="NC HAMMER" />

                <div className="content-left">
                    <h3>Stare at ceiling</h3>
                    <p>
                        Stare at ceiling eat all the power cords fight an
                        alligator and win, love and play riveting piece on
                        synthesizer keyboard yet climb a tree, wait for a
                        fireman jump to fireman then scratch his face or
                        instantly break out into full speed gallop across the
                        house for no reason.
                    </p>
                </div>
            </section>
            <section>
                <img className="img-main" src={neil} alt="NC HAMMER" />

                <div className="content-left">
                    <h3>paw at your fat belly</h3>
                    <p>
                        Run up and down stairs paw at your fat belly and need to
                        check on human, have not seen in an hour might be dead
                        oh look, human is alive, hiss at human, feed me for
                        stand in front of the computer screen.
                    </p>
                </div>
            </section>
        </React.Fragment>
    )
}
