var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="page-title text-center">About</h1>
      <p>This weather application is built on React. I have built this for the Complete React Web Application Development course.</p>
      <p>Here are some tools I've used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="https://www.apixu.com/">Apixu Weather API</a>
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
