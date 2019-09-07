import '../assets/sass/footer.scss'
import React from 'react'

export default () => {
    return (
        <footer className="page-footer">
            {/* <div className="container"> */}
            <div className="row">
                <div className="col l6 s12">
                    <h5>Footer Content</h5>
                    <p>
                        You can use rows and columns here to organize your
                        footer content.
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
                    <div className="col l6 s12">© 2018 Copyright Text</div>
                </div>
            </div>
        </footer>
    )
}
