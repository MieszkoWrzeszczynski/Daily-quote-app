import React from "react";
import ReactDOM from "react-dom";
var moment = require('moment');
import Name from "./components/Name";
import Time from "./components/Time";
import Date from "./components/Date";


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

const app = document.getElementById('root');
ReactDOM.render(<Controller/>, app);