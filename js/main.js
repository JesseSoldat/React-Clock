import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import Clock from './clock';

ReactDom.render(
	<div>
		<Clock format="hh:mm:ss"/>
		<Clock format='MMMM Do YYYY, h:mm:ss a'/>
	</div>,
	document.querySelector('#root')
);