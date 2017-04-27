import React, { Component } from 'react';

import Style from './style/App.less';

import Auth from './components/Auth/Auth';
import Chat from './components/Chat/Chat';

class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {classChat: 'hide', classAuth: 'visible'};
		this.showChat = this.showChat.bind(this);
		this.closeChat = this.closeChat.bind(this);
	}

	/*  вхід в чат при успішному логуванні -> приховання <Auth />
	   і відображення <Chat />  */
	showChat(){
		this.setState({
			classChat: 'visible',
			classAuth: 'hide'
		});
	}

	// вихід з чату
	closeChat(){
		this.setState({
			classChat: 'hide',
			classAuth: 'visible'
		});
	}

	render(){
		return(
			<div className='app'>
				<Auth classAuth={this.state.classAuth} onShowChat={this.showChat} />
				<Chat classChat={this.state.classChat} onCloseChat={this.closeChat} />
			</div>
		); 
	}
}

export default App;

// <Auth onShowChat={this.showChat} />