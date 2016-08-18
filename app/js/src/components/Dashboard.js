var React = require('react');
var LastSearch = require('./LastSearch.js');
var ShortCard = require('./ShortCard.js');

module.exports = React.createClass({
  render: function () {
    return (
     <div className='ui fluid container top-margin-container'>
              <h1 className='ui big header'> Um dashboard simple e simpático </h1>
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
      title: 'Tem alguma dúvida?',
      desc: ' Envie sua dúvida, registre sugestões e entraremos em contato com você.',
      objectId: 'ajuda',
      buttonText: 'VER TUTORIAIS',
      featName: 'ajuda',
      color: 'inverted blue',
      drawColor: 'white',
      buttonColor: 'inverted white',
      iconColor: 'inverted white',
      cardSize: 'short-card',
      icon: 'help',
      buttonEvent: 'help',
      id: 'help'
    },
    {
      title: 'User Research Lab?',
      desc: 'Temos um laboratório de pesquisa formado por vocês usuários, ' +
      'faça parte dessa iniciativa também!',
      objectId: 'research',
      buttonText: 'SAIBA MAIS',
      featName: 'research',
      color: 'white',
      drawColor: 'pink',
      buttonColor: 'inverted dark-pink',
      iconColor: 'md-pink',
      cardSize: 'short-card',
      icon: 'loyalty',
      id: 'user-research'
    }
  ];

  var topDashboardData = [
      {
        title: 'Faça seu Hotzones',
        desc: ' Para começar',
        buttonText: 'AVANÇAR',
      }
