var React = require('react');
var Teste = require('./Teste.js');
module.exports = React.createClass({
  render: function () {
    return (
     <div class='ui fluid container top-margin-container'>
              <div class='ui stackable four column grid'>
                  <div id='dashboard-top-elements' class='row'>
                    <Teste/>
                  </div>
              </div>
            </div>
          );
  },
});
