import React, { Component } from 'react';

import Style from './Auth.less';

import Login from './Login/Login';
import Register from './Register/Register';

class Auth extends React.Component{
	constructor(props){
		super(props);
		this.state = {
		    classLinkLogin: 'active', 
		    classLinkRegister: '', 
		    classAuth: this.props.classAuth,
		    classLogin: 'visible', 
		    classRegister: 'hide'
		};

		this.showLogin = this.showLogin.bind(this);
		this.showRegister = this.showRegister.bind(this);
		this.hideAuth = this.hideAuth.bind(this);
	}

	// приховування і відображення <Auth />
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.classAuth !== this.props.classAuth){
			if(nextProps.classAuth === 'visible'){
				nextState.classAuth = 'visible';
			}
			else{
				nextState.classAuth = 'hide';
			}
			return true;
		}
		return true;
	}

	/*  при натисненні вкладки Login відобрається <Login /> 
	    і приховується <Register />  */
	showLogin(){
		if(this.state.classLinkLogin === '' || this.state.classRegister === 'hide'){
			this.setState({
				classLinkLogin: 'active', 
				classLinkRegister: '', 
				classLogin: 'visible',
				classRegister: 'hide'
			});
		}
	}

	/*  при натисненні вкладки Register відображається <Register />
	   і приховується <Login />  */
	showRegister(){
		if(this.state.classLinkRegister === ''){
			this.setState({
				classLinkLogin: '', 
				classLinkRegister: 'active', 
				classLogin: 'hide',
				classRegister: 'visible'
			});
		}
	}

	// приховування <Auth /> при вдалому логуванні
	hideAuth(){
		this.props.onShowChat();
	}

	render(){
		return(
			<div className={this.state.classAuth} id='auth'>
				<h1>Welcome to Chat Application</h1>
				<nav className="auth-nav">
					<a className={this.state.classLinkLogin} onClick={this.showLogin}>Login</a>
					<a className={this.state.classLinkRegister} onClick={this.showRegister}>Register</a>
				</nav>
				<Login classLogin={this.state.classLogin} onHideAuth={this.hideAuth} />
				<Register classRegister={this.state.classRegister} onShowLogin={this.showLogin} />
			</div>
		); 
	}
}

export default Auth;