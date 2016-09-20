import React from 'react';
import moment from 'moment';

export default React.createClass({

componentDidMount(){
	this.startTimer();
},

getInitialState(){
	return {
		timeString: this.getTimeString()
	};
},

componentWilUnmount(){
	if(this.timer) {
		clearInterval(this.timer);
	}
},

getTimeString(){
	let format = this.props.format;
	return moment().format(format);
},

startTimer(){
	if(this.timer){
		clearInterval(this.timer);
	}
	this.timer = setInterval( () => {
		this.setState(this.getInitialState());
	}, 1000);

	console.log(this.state.timeString);
},



render(){
	return(
	<div id="clock">{this.state.timeString}
	</div>
	)
}

});