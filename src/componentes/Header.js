import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => { 
    return(
        <div>
            <nav>
                <div className="nav-wrapper light darken-2">
                   {/* <a className="brand-logo">{props.titulo}</a> */}
                   <h3 className="brand-log">{props.titulo}</h3>
                </div>
            </nav>
        </div>
    );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
export default Header;