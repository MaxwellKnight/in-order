import { useState } from 'react';
import { LoginForm, RegisterForm } from '../../components';
import './login.css'

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
						{!isRegister ? <LoginForm setIsRegister={setIsRegister}/> : <RegisterForm setIsRegister={setIsRegister}/>}
					</div>
				</section>
			</div>
		</main>
	)
}

export default Login;
