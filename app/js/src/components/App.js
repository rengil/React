var React = require('react');
var LastSearch = require('./LastSearch.js');
var ShortCard = require('./ShortCard.js');

module.exports = React.createClass({
  render: function () {
    return (
     <div className='ui fluid container top-margin-container'>
              <h1 className='ui big header'> Um dashboard simples e simpático </h1>
              <h3 className='ui sub-header'> Componentizado </h3>
              <div className='ui stackable grid'>
                  <div id='dashboard-top-elements' className='row ui linked cards'>
                     {topDashboardData.map(topDashboardData =>
                      <ShortCard {...topDashboardData} />)}
                  </div>
                </div>

      </div>
          );
  }
});

var topDashboardData = [
    {
      title: 'Clique',
      desc: ' Para começar',
      buttonText: 'AVANÇAR'
    }
];
