import '../assets/sass/footer.scss'
import React from 'react'

export default () => {
    return (
        <footer className="page-footer">
            {/* <div className="container"> */}
            <div className="row">
                <div className="col l6 s12">
                    <h5>Contact Information</h5>
                    <p>
                        Eat plants, meow, and throw up because i ate plants lick
                        the other cats i like cats because they are fat and
                        fluffy.
                    </p>
                    <h5>Links</h5>
                    <ul>
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="row">
                    <div className="col l6 s12">© 2018 Neil Carrodus</div>
                </div>
            </div>
        </footer>
    )
}
