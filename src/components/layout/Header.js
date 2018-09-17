import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { branding } = props;
    return (
        <nav className="nav navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href='/' className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/contact/add" className="nav-link">
                                Add
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/test" className="nav-link">
                                Test
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// default props
Header.defaultProps = {
    branding: 'My App'
}

// validation
Header.PropTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;