import React, { Component } from 'react';

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			classRegister: this.props.classRegister,
			username: '',
			bdColorLogin: '#3B3E99',
			email: '',
			bdColorEmail: '#3B3E99',
			password: '',
			bdColorPassword: '#3B3E99',
			confirmPassword: '',
			bdColorConfirmPassword: '#3B3E99'
		};

		this.submitRegister = this.submitRegister.bind(this);
		this.changeLogin = this.changeLogin.bind(this);
		this.changeEmail = this.changeEmail.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
		this.blurLogin = this.blurLogin.bind(this);
		this.blurEmail = this.blurEmail.bind(this);
		this.blurPassword = this.blurPassword.bind(this);
		this.blurConfirmPassword = this.blurConfirmPassword.bind(this);
	}

	// при натисненні вкладки Register відображається <Register />
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.classRegister !== this.props.classRegister){
			if(nextProps.classRegister === 'visible'){
				nextState.classRegister = 'visible';
			}
			else{
				nextState.classRegister = 'hide';
				// приведення полів до початкових значень
				nextState.username = '';
				nextState.bdColorLogin = '#3B3E99';
				nextState.email = '';
				nextState.bdColorEmail = '#3B3E99';
				nextState.password = '';
				nextState.bdColorPassword = '#3B3E99';
				nextState.confirmPassword = '';
				nextState.bdColorConfirmPassword = '#3B3E99';
			}
			return true;	
		}
		return true;
	}

	/* при кліку на кнопку Register -> приховування <Register />
	   і відображення <Login /> */
	submitRegister(event){
		event.preventDefault();
			
	    this.registerServer();

		this.setState({classRegister: 'hide'}); 
		this.props.onShowLogin('visible');
	}

	// реєстрування на веб-сервері
	registerServer(){
		let myHeaders = new Headers();
		myHeaders.set('Content-Type', 'application/json');

		let myInit = {
		  method: 'post',
		  headers: myHeaders,
		  mode: 'cors',
		  body: JSON.stringify({ 
		  	username: this.state.username,
		  	email: this.state.email,
		  	password: this.state.password })
		}

		fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', myInit).then(() => {console.log('sign in')});
	}

	// запис логіна
	changeLogin(event){
		let val = event.target.value;
		let bgNewColorLogin = this.checkInputValue(val);
		this.setState({username: val, bdColorLogin: bgNewColorLogin});
	}

	// запис email
	changeEmail(event){
		let val = event.target.value;
		let bgNewColorEmail = this.checkInputValue(val);
		this.setState({email: val, bdColorEmail: bgNewColorEmail});
	}

	// запис паролю
	changePassword(event){
		let val = event.target.value;
		let bgNewColorPassword = this.checkInputValue(val);
		this.setState({password: val, bdColorPassword: bgNewColorPassword});
	}

	// запис повтору паролю
	changeConfirmPassword(event){
		let val = event.target.value;
		let bgNewColorConfirmPassword = this.checkInputValue(val);
		this.setState({confirmPassword: val, bdColorConfirmPassword: bgNewColorConfirmPassword});
	}

	// перевірка правильності логіна або паролю
	checkInputValue(value){
		if(value.length >= 1) return '#008000';
		return '#FF0000';
	}

	// втрата фокуса поля логіна без даних
	blurLogin(event){
		if(event.target.value.length === 0){
			this.setState({bdColorLogin: '#FF0000'});
		}
	}

	// втрата фокуса поля email без даних
	blurEmail(event){
		if(event.target.value.length === 0){
			this.setState({bdColorEmail: '#FF0000'});
		}
	}

	// втрата фокуса поля паролю без даних
	blurPassword(event){
		if(event.target.value.length === 0){
			this.setState({bdColorPassword: '#FF0000'});
		}
	}

	// втрата фокуса поля повтору паролю без даних
	blurConfirmPassword(event){
		if(event.target.value.length === 0){
			this.setState({bdColorConfirmPassword: '#FF0000'});
		}
	}

	render(){
		return(
			<div id='register' className={this.state.classRegister} title={this.state.classLogin} >
				<form>
					<input type='text'
					       placeholder='Login' 
					       value={this.state.username}
					       onChange={this.changeLogin} 
					       onBlur={this.blurLogin}
					       style={{borderColor: this.state.bdColorLogin}} 
					/>
					<input type='text' 
					       placeholder='Email' 
					       value={this.state.email}
					       onChange={this.changeEmail}
					       onBlur={this.blurEmail}
					       style={{borderColor: this.state.bdColorEmail}} 
					/>
					<input type='password' 
					       placeholder='Password' 
					       value={this.state.password}
					       onChange={this.changePassword}
					       onBlur={this.blurPassword}
					       style={{borderColor: this.state.bdColorPassword}} 
					/>
					<input type='password' 
					       placeholder='Confirm password'
					       value={this.state.confirmPassword}
					       onChange={this.changeConfirmPassword}
					       onBlur={this.blurConfirmPassword}
					       style={{borderColor: this.state.bdColorConfirmPassword}} 
					/>
					<input type='submit' value='Register' onClick={this.submitRegister} />
				</form>
			</div>
		); 
	}
}

export default Register;
