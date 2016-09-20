import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import Clock from './clock';

ReactDom.render(
	<div>
		<Clock format="#hhmmss"/>
	</div>,
	document.querySelector('#root')
);
