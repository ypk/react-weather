var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div>
      <IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Get Weather</IndexLink>
      <br />
      <Link activeClassName="active"  activeStyle={{fontWeight: 'bold'}}  to="/about">About</Link>
      <br />
      <Link  activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples</Link>
    </div>
  );
};

module.exports = Nav;
