var React = require('react');
var moment = require('moment');
var Message = require('./Message');
var qwest = require('qwest');

class Controller extends React.Component {
  constructor(){
	super();
	this.state = {
		name: "",
		quotes: [
			{
	  			quote:"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
	     		author:"Swami Sivananda"
	  		}
		]
	};
	this.randomQuote = this.randomQuote.bind(this);
	this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes(){
  var self = this;

  qwest.get('http://localhost:8080/api', {}, {
	        dataType: 'json',
	        cache: true
	    })
	    .then(function(xhr, data) {
	        self.setState({ quotes: data }); 
	    });
  }

  randomQuote()  {
	return  this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
  }

  componentWillMount() {
    this.setState({name: "Mieszko"});  
    this.getQuotes();  
  }

  render() {
  	var time = moment().format('LT');
    var date = moment().format("MMMM D YYYY");
    var rand_quote = this.randomQuote();
   
    return (
    	<div>
			<blockquote>
				<p>
					<Message message={rand_quote.quote} />
			    </p>
				<footer>
					<Message message={rand_quote.author} /> 
				</footer>
			</blockquote>
			<footer>
				<p>
				    Designed by: <Message message={this.state.name} /> 
			    </p>
				<p>
					Date: <Message message={date} /> Time: <Message message={time} /> 
			    </p>
			</footer>
	    </div>
    );
  }
}

module.exports = Controller;