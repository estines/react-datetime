var DateTime = require("../DateTime.js");
var React = require("react");
var ReactDOM = require("react-dom");

ReactDOM.render(
  React.createElement(DateTime, {
    onChange(value) {
      console.log(value.format());
    },
    locale: 'th-TH',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: false,
    buddishEra: false,
  }),
  document.getElementById("datetime")
);
