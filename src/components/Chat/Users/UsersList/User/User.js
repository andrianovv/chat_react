import React, { Component } from 'react';

class User extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bgColorUser: '', 
			bgColorTimeOut: '',
			time: this.props.time
		};
		// this.clickUser = this.clickUser.bind(this);
		/*this.mouseOverUser = this.mouseOverUser.bind(this);
		this.mouseLeaveClick = this.mouseLeaveClick.bind(this);*/
	}

	// при кліку на <User />
	/*clickUser(){
		this.setState({
			bgColorUser: '#F23F79', 
			bgColorTimeOut: '#fff',
			time: 'new'
		});
		console.log(this.props.body);
	}*/

	// при наведені курсора на <User />
	/*mouseOverUser(){
		this.setState({bgColorUser: '#4B4EA4'});
	}*/

	// при відведені курсора від <User />
	/*mouseLeaveClick(){
		this.setState({
			bgColorUser: '#3B3E99', 
			bgColorTimeOut: '#393C8E',
			time: this.props.time
		});
	}*/

	render(){
		return(
			<li className='user' 
				
			>
				<img className='user-photo' src={this.props.photo} width='55' height='55' />
				<div className='user-info'>
					<h4 className='user-info__name'>{this.props.senderName}</h4>
					<p className='user-info__post'>{this.props.subject}</p>
				</div>
				<div className='user-post_timeout'>{this.state.time}</div>
			</li>
		); 
	}
}

export default User;

/*onMouseOver={this.mouseOverUser}
onMouseLeave={this.mouseLeaveClick}
onClick={this.clickUser} 			
style={{backgroundColor: this.state.bgColorUser}}*/

// style={{backgroundColor: this.state.bgColorTimeOut}}
