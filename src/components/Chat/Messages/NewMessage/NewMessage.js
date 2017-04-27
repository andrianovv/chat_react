import React, { Component } from 'react';

import Style from './NewMessage.less';

class NewMessage extends React.Component{
	render(){
		return(
			<footer className='new-message'>
				<form className='post-new'>
					<textarea placeholder='Type something...'></textarea>
					<label htmlFor='footer_label'>
						<i className='btn-smiley fa fa-smile-o'></i>
						<i className='btn-download fa fa-files-o'></i>
					</label>
				</form>
			</footer>
		); 
	}
}

export default NewMessage;