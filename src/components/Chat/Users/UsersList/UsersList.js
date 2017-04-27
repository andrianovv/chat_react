import React, { Component } from 'react';

import Style from './UsersList.less';

import User from './User/User';


class UsersList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			messages: this.props.valueSearch
		};
	}

	/* рендер сторінки при зміні списку юзерів 
	   на основі значення з верхнього інпута пошуку */
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.valueSearch !== this.props.valueSearch){
			nextState.messages = nextProps.valueSearch;
			return true;
		}
		return true;
	}

	render(){
		return(
			<ul className='users-list'>
				{this.state.messages.map(
					message => 
					<User key={message.id}
				          photo={message.photo}
				          senderName={message.senderName}
				          subject={message.subject}
				          body={message.body}
				          time={message.time}
				    />
				)}
			</ul>
		); 
	}
}

export default UsersList;

