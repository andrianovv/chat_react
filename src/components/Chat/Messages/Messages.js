import React, { Component } from 'react';

import Style from './Messages.less';

import MessagesMenu from './MessagesMenu/MessagesMenu';
import MessagesList from './MessagesList/MessagesList';
import NewMessage from './NewMessage/NewMessage';

class Messages extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages: []
		};
		this.closeChat = this.closeChat.bind(this);
	}

	// вихід з чату
	closeChat(){
		this.props.onCloseChat();
	}

	// отримання даних з веб-сервера
	componentDidMount(){
		fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
			.then((messages) => {
				return messages.json()
			})
			.then(messages => {
				this.setState({messages});
				console.log(messages);
			});	
	}

	render(){
		return(
			<section className='messages hide'>
				<MessagesMenu onCloseChat={this.closeChat} />
				<MessagesList  />
				<NewMessage />
			</section>
		); 
	}
}

export default Messages;