import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from './Alert';

export const Register = () => {
	const [ user, setUser ] = useState({ email: '', password: '' });
	const [ error, setError ] = useState('');

	const { signup } = useAuth();
	const navigate = useNavigate();

	const handleChange = ({ target: { name, value } }) => {
		setUser({ ...user, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await signup(user.email, user.password);
			console.log('Salio bien');
			navigate('/');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<div className="w-full max-w-xs m-auto">
			{error && <Alert message={error} />}
			<form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
				<div className="mb-3">
					<label htmlFor="email" className="block text-gray-700 text-sm font-bold my-2">
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
				<div className="mb-3">
					<label htmlFor="password" className="block text-gray-700 text-sm font-bold my-2">
						Password
					</label>
					<input
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-md"
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						placeholder="******"
					/>
				</div>
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline">
					Register
				</button>
			</form>
			<div className="flex justify-between my-2 p-2">
				<p className="p-2 ">Alredy hace an Account</p>
				<Link
					to={'/login'}
					className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 p-2"
				>
					Login
				</Link>
			</div>
		</div>
	);
};
