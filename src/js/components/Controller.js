var React = require('react');
var moment = require('moment');
var Message = require('./Message');



class Controller extends React.Component {
  constructor(){
	super();
	this.state = {name: ""};
  }

  componentWillMount() {
    this.setState({name: "Mieszko"});      
  }

  render() {
  	var time = moment().format('LT');
    var date = moment().format("MMMM D YYYY");
   
    return (
	    <ul>
		   <Message message={this.state.name} /> 
		   <Message message={time} />
		   <Message message={date} /> 
	    </ul>
    );
  }
}

module.exports = Controller;