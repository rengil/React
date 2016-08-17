var React = require('react');

class ShortCard extends React.Component {
  constructor() {
     super();
     this.state = {
       enable: false
     };
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     console.log(this.state.enable)
     this.setState({enable: true});
  }

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

            </div>

          </div>
        );
  }
}

module.exports = ShortCard;
