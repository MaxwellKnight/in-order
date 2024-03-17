import { useState } from 'react';
import { LoginForm, RegisterForm } from '../../components';
import './login.css'

const loginUser = async (credentials) => {
	return fetch('http://localhost:3000/users/', {
	  method: 'GET',
	  headers: {
		 'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
}

const registerUser = async (data) => {
	return fetch('http://localhost:3000/users/', {
	  method: 'POST',
	  headers: {
		 'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	})
	  .then(data => data.json())
}

const Login = () => {
	const [isRegister, setIsRegister] = useState(false);

	return (
		<main className="home-page">
			<div>
				<h1>ByCoffee</h1>
			</div>
			<div className="">
				<section className="left-side">
					<p>Your coffee<br/>Your vibe<br />Your energy</p>
				</section>
				<section className="right-side">
					<div>
						{!isRegister ? <LoginForm setIsRegister={setIsRegister} loginUser={loginUser}/> : 
						<RegisterForm setIsRegister={setIsRegister} registerUser={registerUser}/>}
					</div>
				</section>
			</div>
		</main>
	)
}

export default Login;
