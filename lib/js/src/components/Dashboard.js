
var Dashboard = React.createClass({displayName: "Dashboard",
  render: function () {
    return (
     React.createElement("div", {class: "ui fluid container top-margin-container"}, 
              React.createElement("div", {class: "ui stackable four column grid"}, 
                  React.createElement("div", {id: "dashboard-top-elements", class: "row"}, 
                     React.createElement(LastSearchs, null)
                  )
                )

            )
          );
  }
});

module.exports = Dashboard;