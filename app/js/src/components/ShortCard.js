var React = require('react');
var Request = require('./Request');

const ShortCard = React.createClass({
  getInitialState() {
    return {
     enable: false,
     elements: []
   };
  },

  handleClick() {

    Request.getMyData().then(function (data) {
      this.setState({tests: data});
    }.bind(this));

  },

  render() {
    return (

        <div className='card dashboard-card'>

              <div className='center aligned content big-content'>
                <i className='material-icons md-120'>like</i>

                <div className='meta'>
                  <div className='header'>
                  <h1 className="ui left aligned"> {this.props.title} </h1 >
                  </div>

                  <div className='description'>
                  <p className="ui left aligned">   {this.props.desc}  </p>
                  </div>
                </div>

              </div>

              <div className='center aligned extra content'>

              <button onClick={this.handleClick}
                className={'ui center aligned fluid red button card-button ' +  (this.state.enable ? 'disabled' : '')}>
                 {this.props.buttonText}
              </button>

              {this.state.tests ?
                <div className='ui segment'>
                {this.state.tests.map(data =>
                 data.title)}
                </div>
              : ''}
            </div>

          </div>
        );
  }
});

module.exports = ShortCard;
