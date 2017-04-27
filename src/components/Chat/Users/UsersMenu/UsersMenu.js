import React, { Component } from 'react';

import Style from './UsersMenu.less';

class UsersMenu extends React.Component{
	constructor(props){
		super(props);
		this.state ={valInput: ''};
		this.searchInput = this.searchInput.bind(this);
	}

	/* ввід назви юзера для сортування всіх 
	   юзерів в <UserList />                */
	searchInput(event){
		let  val = event.target.value;
		this.setState({valInput: val});
		this.props.onSearchUser(val);
	}

	render(){
		return(
			<header className='users-menu'>
				<form>
					<button type='button' className='btn-show'>
						<i className='fa fa-angle-left'></i>
					</button>
					<div className='search'>
						<input type='text' value={this.state.valInput} onChange={this.searchInput} />
						<label htmlFor='searh-friend'>
							<i className='fa fa-search'></i>
						</label>
					</div>
					<button type='button' className='btn-menu'>
						<i className='fa fa-bars'></i>
					</button>
				</form>
			</header>
		); 
	}
}

export default UsersMenu;