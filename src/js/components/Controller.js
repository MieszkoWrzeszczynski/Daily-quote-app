var React = require('react');
var moment = require('moment');
var Message = require('./Message');


class Controller extends React.Component {
  constructor(){
	super();
	this.state = {
		name: "",
		quotes: []
	};
	this.randomQuote = this.randomQuote.bind(this);
  }

  componentWillMount() {
    this.setState({name: "Mieszko"});  

    var temp_quotes = [];

    temp_quotes.push.call(temp_quotes,
	  	{
	  		quote:"The best preparation for tomorrow is doing your best today.",
	  		author:"H. Jackson Brown, Jr"
	  	},
	  	{
	  		quote:"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
	     	author:"Jimmy Dean"
	  	},
	  	{
	  		quote:"Try to be a rainbow in someone\'s cloud.",
	     	author:'Maya Angelou'
	  	},
	  	{
	  		quote:"We must let go of the life we have planned, so as to accept the one that is waiting for us",
	     	author:'Joseph Campbell'
	  	},
	  	{
	  		quote:"Put your heart, mind, and soul into even your smallest acts. This is the secret of success.",
	     	author:'Swami Sivananda'
	  	},
	  	{
	  		quote:"Nothing is impossible, the word itself says 'I'm possible'!",
	     	author:"Audrey Hepburn"
	  	},
	  	{
	  		quote:"Believe you can and you're halfway there",
	     	author:"Aesop"
	  	},
	  	{
	  		quote:"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.",
	     	author:"Muhammad Ali"
	  	},
	  	{
	  		quote:"Whoever is happy will make others happy too.",
	     	author:"Anne Frank"
	  	}
    );

    this.setState({ quotes: temp_quotes });   
  }

  randomQuote()  {
	return  this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
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