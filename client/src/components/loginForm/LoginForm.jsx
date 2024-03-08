import { useState } from 'react';
import './loginForm.css'
import { Link } from 'react-router-dom';

const LoginForm = ({ setIsRegister }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleEmail = (event) => {
		event.preventDefault();
		setEmail(event.target.value);
	}

	const handlePassword = (event) => {
		event.preventDefault();
		setPassword(event.target.value);
	}

	const handleOnClick = (event) => {
		event.preventDefault();
		setIsRegister(true);
	}
	return (
		<div className='login-form-wrapper'>
			<div className='login-form'>
				<h2>התחברות</h2>
				<form>
					<input onChange={handleEmail} type="email" id="email" name="email" placeholder="אימייל"/>
					<input onChange={handlePassword} type="password" id="password" name="password" placeholder="סיסמה"/>
					<button onClick={(e) => e.preventDefault()}>התחבר/י</button>
				</form>
				<div className='buttons'>
					<span>?הראשון שלך</span>
					<button onClick={handleOnClick}>הרשמה</button>
					<Link to='/' ><button>כניסה כאורח</button></Link>
				</div>
			</div>
		</div>
	)
}

export default LoginForm;