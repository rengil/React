var LastSearchs = require('./LastSearchs');

var Dashboard = React.createClass({
  render: function () {
    return (
     <div class='ui fluid container top-margin-container'>
              <div class='ui stackable four column grid'>
                  <div id='dashboard-top-elements' class='row'>
                     <LastSearchs/>
                  </div>
                </div>

            </div>
          );
  }
});

module.exports = Dashboard;
