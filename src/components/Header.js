import '../assets/sass/header.scss'
import neil from '../assets/img/neil-on-a-rock.jpg'
import React from 'react'
//import NavBar from './NavBar'

export default () => {
    return (
        <section>
            <div className="split">
                <img className="img-main" src={neil} alt="NC HAMMER" />
            </div>
            <div className="split valign-wrapper">
                <div className="content-header">
                    <i className="fal fa-hammer fa-flip-horizontal fa-2x" />
                    <p>Hi, I'm Neil.</p>
                </div>
                {/* <div className="p-header">
                    Go to hizzle hizzle fizzle. Sed erizzle. Doggy izzle
                    crackalackin dapibus turpis tempizzle. Maurizzle away owned
                    and turpizzle. Check it out izzle fo shizzle. Things ghetto
                    rhoncizzle nisi. In hac pimpin 'shizznit dictumst.
                </div> */}
            </div>
        </section>
    )
}
