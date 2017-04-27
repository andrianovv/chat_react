import React, { Component } from 'react';

import Style from './MessagesMenu.less';

class MessagesMenu extends React.Component{
	constructor(props){
		super(props);
		this.closeChat = this.closeChat.bind(this);
	}

	// вихід з чату
	closeChat(){
		this.props.onCloseChat();
	}

	render(){
		return(
			<header className='messages-menu'>
				<button className='btn-exit' onClick={this.closeChat}>
					<i className='fa fa-sign-out'></i>
				</button>
			</header>
		); 
	}
}

export default MessagesMenu;