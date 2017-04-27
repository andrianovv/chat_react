import React, { Component } from 'react';

import Style from './Chat.less';

import Users from './Users/Users';
import Messages from './Messages/Messages';

class Chat extends React.Component{
	constructor(props){
		super(props);
		this.state = {classChat: this.props.classChat};
		this.closeChat = this.closeChat.bind(this);
	}

	// при успішному логуванні -> відображається <Chat />
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.classChat !== this.props.classChat){
			if(nextProps.classChat === 'visible'){
				nextState.classChat = 'visible';
			}
			else{
				nextState.classChat = 'hide';
			}
			return true;
		}
		return true;
	}

	// вихід з чату
	closeChat(){
		this.props.onCloseChat();
	}

	render(){
		return(
			<div className={this.state.classChat}>
				<div className='chat'>
					<Users />
					<Messages onCloseChat={this.closeChat} />
				</div>
			</div>
		); 
	}
}

export default Chat;