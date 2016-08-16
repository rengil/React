var React = require('react');

module.exports = React.createClass({
  render: function () {
      return (<div className="ui eight wide column no-padding-right">
            <div className="ui card wide-card">
              <div className="ui left aligned inverted blue segment no-radius">

                <h1> Novidades  </h1>
              </div>

              <div className="ui center aligned content">
                  <i className="material-icons md-grey md-100">tag_faces</i>
                  <h3 className='ui left aligned header'> Excel e CSV</h3>
                  <p> Agora, após o fim de uma busca por hotzones, é possível exportar para os formatos XLS e CSV. </p>
                  <div className='ui right aligned basic segment news-date'> Em 27 de Julho de 2016 </div>
              </div>

            </div>

            </div>);
    }
});
