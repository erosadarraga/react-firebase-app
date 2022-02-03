import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

export const Login = () => {
	const [ user, setUser ] = useState({
		email: '',
		password: ''
	});
	const { login, loginWithGoogle, resetPassword } = useAuth();
	const [ error, setError ] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await login(user.email, user.password);
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	const handleChange = ({ target: { value, name } }) => setUser({ ...user, [name]: value });

	const handleGoogleSignin = async () => {
		try {
			// throw new Error('Aplication the mierda');
			await loginWithGoogle();
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};
	const handleResetPassword = async () => {
		if (!user.email) return setError('Please enter your email');
		try {
			await resetPassword(user.email);
			setError('We sent you an email with a link to reset your password');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="w-full max-w-xs m-auto">
			{error && <Alert message={error} />}
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-4 ">
					<label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
						Email
					</label>
					<input
						type="email"
						name="email"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-md"
						placeholder="youremail@company.ltd"
						onChange={handleChange}
					/>
				</div>

				<div className="mb-4">
					<label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-md"
						placeholder="youremail@company.ltd"
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						placeholder="******"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-md ">
						Login
					</button>
					<a
						href="#!"
						className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						onClick={handleResetPassword}
					>
						Forgot Password?
					</a>
				</div>
			</form>
			<div className="flex justify-between my-2 p-2">
				<p className="p-2 ">Don´t have an Account</p>
				<Link
					to={'/register'}
					className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 p-2"
				>
					Register
				</Link>
			</div>
			<button
				onClick={handleGoogleSignin}
				className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full"
			>
				Google Login
			</button>
		</div>
	);
};
