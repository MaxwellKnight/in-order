import { useState } from 'react';
import { LoginForm, RegisterForm } from '../../components';
import { useUser } from '../../context';
import './login.css'

const loginUser = async (userId, setUser) => {
	return fetch(`http://localhost:3000/users/${userId}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }})
	  .then(data => data.text())
	  .then(user => setUser(user));
}

const registerUser = async (data) => {
	return fetch('http://localhost:3000/users/', {
	  method: 'POST',
	  headers: {
		 'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(data)
	})
	  .then(res => console.log(res));
}

const Login = () => {
	const user = useUser();
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
