var React = require('react');
var moment = require('moment');
var Message = require('./Message');
var qwest = require('qwest');

class Controller extends React.Component {
  constructor(){
	super();
	this.state = {
		name: "",
		quotes: []
	};
	this.randomQuote = this.randomQuote.bind(this);
	this.getQuotes = this.getQuotes.bind(this);
  }



  getQuotes()  {

  qwest.get('http://localhost:8080/api', {}, {
	        dataType: 'json',
	        cache: true
	    })
	    .then(function(xhr, data) {
	    	console.log(data);
	        this.setState({ quotes: data }); 
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

   // console.log(this.state.quotes);
   
    return (
    	<div>
			<blockquote>
				<p>
					<Message message={rand_quote} />
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