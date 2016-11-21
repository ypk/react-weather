var React = require('react');

var {Link}  = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to="/?location=london,uk">London</Link>
        </li>
        <li>
          <Link to="/?location=chennai,in">Chennai</Link>
        </li>
        <li>
          <Link to="/?location=maine,us">Maine</Link>
        </li>
        <li>
          <Link to="/?location=sydney,au">Sydney</Link>
        </li>
        <li>
          <Link to="/?location=stalingrad,ru">Stalingrad</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
