var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function(){
      var modalTarget = $("#error-modal");
      var modal =  new Foundation.Reveal(modalTarget);
      modal.show();
    },
    render: function() {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal>
                <h4>Heading</h4>
                <p>Error message.</p>
                <p>
                  <button className="button hollow" data-close type="button">
                    Dismiss
                  </button>
                </p>
            </div>
        );
    }
})

module.exports = ErrorModal;
