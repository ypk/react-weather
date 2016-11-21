var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
    return (
        <nav className="top-bar">
            <div className="too-bar-left">
                <ul className="vertical medium-horizontal menu">
                    <li className="menu-text">
                      React Weather App
                    </li>
                    <li>
                        <IndexLink activeClassName="active" activeStyle={{
                            fontWeight: 'bold'
                        }} to="/">Get Weather</IndexLink>
                    </li>
                    <li>
                        <Link activeClassName="active" activeStyle={{
                            fontWeight: 'bold'
                        }} to="/about">About</Link>
                    </li>
                    <li>
                        <Link activeClassName="active" activeStyle={{
                            fontWeight: 'bold'
                        }} to="/examples">Examples</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

module.exports = Nav;
