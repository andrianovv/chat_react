import React, { Component } from 'react';

import Style from './Users.less';
import messages from '../../../Data/messages.json';

import UsersMenu from './UsersMenu/UsersMenu';
import UsersList from './UsersList/UsersList';

class Users extends React.Component{
	constructor(props){
		super(props);
		this.state = {valueSearch: messages};
		this.searhUser = this.searhUser.bind(this);
	}

	/* створення нового списку юзерів в <UserList /> 
	   на основі значення з верхнього інпута пошуку  */
	searhUser(val){
		val = val.toLowerCase();
		let filteredList = messages.filter(function(el){
			let searchValue = el.senderName.toLowerCase();
			return searchValue.search(val) !== -1;
		})
		this.setState({valueSearch: filteredList});
	}

	render(){
		return(
			<section className='users'>
				<UsersMenu onSearchUser={this.searhUser} />
				<UsersList valueSearch={this.state.valueSearch} />
			</section>
		); 
	}
}

export default Users;