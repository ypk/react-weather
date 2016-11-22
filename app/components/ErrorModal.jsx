var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return {
          title: "Error"
        };
    },
    propTypes: {
      title: React.PropTypes.string,
      message: React.PropTypes.string.isRequired
    },
    componentDidMount: function(){
      var {title, message} = this.props;
      var componentMarkup = (
          <div className="reveal tiny text-center" id="error-modal" data-reveal="">
              <h4>{title}</h4>
              <p>{message}</p>
              <button type="button" className="button hollow" data-close="">Dismiss</button>
          </div>
      );

      var $modal = $(ReactDOMServer.renderToString(componentMarkup));
      $(ReactDOM.findDOMNode(this)).html($modal);

      var modal =  new Foundation.Reveal($("#error-modal"));
      modal.open();
    },
    render: function() {
      return (
        <div />
      );
    }
})

module.exports = ErrorModal;
