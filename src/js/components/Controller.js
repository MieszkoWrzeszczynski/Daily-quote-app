var React = require('react');
var moment = require('moment');
var Name = require('./Name');
var Time = require('./Time');
var Date = require('./Date');


class Controller extends React.Component {
  constructor(){
	super();
	this.state = {
		name: "Mieszko",
		time: moment().format('LT'),
		date: moment().format("MMMM D YYYY")
	};
  }

  render() {
    return (
	    <ul>
		   <Name name={this.state.name} /> 
		   <Time time={this.state.time} />
		   <Date date={this.state.date} /> 
	    </ul>
    );
  }
}

module.exports = Controller;