import React, { Component } from 'react';

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			classLogin: this.props.classLogin, 
			username: '',
			bdColorLogin: '#3B3E99',
			password: '',
			bdColorPassword: '#3B3E99'
		};

		this.submitLogin = this.submitLogin.bind(this);
		this.changeLogin = this.changeLogin.bind(this);
		this.changePassword = this.changePassword.bind(this);
		this.blurLogin = this.blurLogin.bind(this);
		this.blurPassword = this.blurPassword.bind(this);
	}

	// при кліку вкладки Login відобрається <Login />
	shouldComponentUpdate(nextProps, nextState){
		if(nextProps.classLogin !== this.props.classLogin){
			if(nextProps.classLogin === 'visible'){
				nextState.classLogin = 'visible';
			}
			else{
				nextState.classLogin = 'hide';
				// приведення полів до початкових значень
				nextState.username = '';
				nextState.bdColorLogin = '#3B3E99';
				nextState.password = '';
				nextState.bdColorPassword = '#3B3E99';
			}
			return true;
		}
		return true;
	}

	// при кліку на кнопку Login -> вхід в чат
	submitLogin(event){
		event.preventDefault();

		this.loginServer();
		
		this.props.onHideAuth();
		
		// приведення полів до початкових значень 
		this.state = { 
			username: '',
			bdColorLogin: '#3B3E99',
			password: '',
			bdColorPassword: '#3B3E99'
		};
	}

	// логування в чат з веб-сервера
	loginServer(){
		let myHeaders = new Headers();
		myHeaders.set('Content-Type', 'application/json');

		let myInit = {
		  method: 'post',
		  headers: myHeaders,
		  mode: 'cors',
		  body: JSON.stringify({ username: this.state.username, password: this.state.password })
		}

		fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', myInit)
			.then((res) => res.json())
			.then((user) => {
				// this.connectSocket(user.token);
				console.log(user);
			});
	}

	connectSocket(tokenJWT){
		const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com');

		socket.on('connect', () => {
	         socket.emit('authenticate', { token: tokenJWT });
	          console.log(socket);

	          socket.on('message', msg => { console.log(msg); });
	          socket.on('join', msg => { console.log(msg); });
	          socket.on('leave', msg => { console.log(msg); });

	          // socket.emit('message', 'test message');
	     });	     
	}

	// запис логіна
	changeLogin(event){
		let val = event.target.value;
		let bgNewColorLogin = this.checkInputValue(val);
		this.setState({username: val, bdColorLogin: bgNewColorLogin});
	}

	// запис паролю
	changePassword(event){
		let val = event.target.value;
		let bgNewColorPassword = this.checkInputValue(val);
		this.setState({password: val, bdColorPassword: bgNewColorPassword});
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

	// втрата фокуса поля паролю без даних
	blurPassword(event){
		if(event.target.value.length === 0){
			this.setState({bdColorPassword: '#FF0000'});
		}
	}
	
	render(){
		return(
			<div id='login' className={this.state.classLogin}>
				<form>
					<input type='text' 
						   placeholder='Login' 
						   value={this.state.username} 
						   onChange={this.changeLogin} 
						   onBlur={this.blurLogin}
						   style={{borderColor: this.state.bdColorLogin}} 
				    />
					<input type='password' 
						   placeholder='Password' 
						   value={this.state.password}
						   onChange={this.changePassword}
						   onBlur={this.blurPassword}
						   style={{borderColor: this.state.bdColorPassword}}
					/>
					<input type='submit' value='Login' onClick={this.submitLogin} />
				</form>
			</div>
		); 
	}
}

export default Login;