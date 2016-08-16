var React = require('react');
var LastSearch = require('./LastSearch.js');
module.exports = React.createClass({
  render: function () {
    return (
     <div className='ui fluid container top-margin-container'>
              <div className='ui stackable four column grid'>
                  <div id='dashboard-top-elements' className='row'>
                    <LastSearch/>
                  </div>
              </div>
            </div>
          );
  },
});
