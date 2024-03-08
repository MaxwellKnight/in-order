import {useState} from 'react'
import './registerForm.css'


const RegisterForm = ({setIsRegister}) => {
	const [formData, setFormData] = useState({
		fullName: '',
		username: '',
		email: '',
		phoneNumber: '',
		password: '',
		confirmPassword: '',
		policyAgreement: false
	})

	const handleOnClick = (event) => {
		event.preventDefault();
		setIsRegister(false);
	}

	const handleOnChange = (event) => {
		const field = event.target;
  
		// If the field is a checkbox, handle it separately
		if (field.type === 'checkbox') {
		  setFormData((prev) => ({
			 ...prev,
			 [field.id]: field.checked,
		  }));
		} else {
		  setFormData((prev) => ({
			 ...prev,
			 [field.id]: field.value,
		  }));
		}
	 };

	return (
		<div className='register-form'>
			<button onClick={handleOnClick} className='close-register'>X</button>
			<form onChange={handleOnChange}>
				<div>
					<div>
						<div className='text-fields'>
							<label htmlFor='fullName'>שם מלא</label>
							<input id='fullName' name='fullName' type="text" />
						</div>
						<div>
							<label htmlFor='email'>אימייל</label>
							<input id='email' name='email'type="email" />
						</div>
						<div>
							<label htmlFor='password'>סיסמה</label>
							<input id='password' name='password' type="password" />
						</div>
					</div>
					<div>
						<div>
							<label htmlFor='username'>שם משתמש</label>
							<input id='username' name='username' type="text" />
						</div>
						<div>
							<label htmlFor='phoneNumber'>מס נייד</label>
							<input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
						</div>
						<div>
							<label htmlFor='confirmPassword'>אישור סיסמה</label>
							<input id='confirmPassword' name='confirmPassword' type="text" />
						</div>
					</div>
					<div className='policy-container'>
						<label htmlFor='policyAgreement'>אישור תנאי שימוש</label>
						<input type='checkbox' id='policyAgreement' name='policyAgreement'/>
					</div>
				</div>

				<button>הרשם</button>
			</form>
		</div>
	)
}

//full name
//email
//sign website policy
//password
//verify password
//phone number
export default RegisterForm;