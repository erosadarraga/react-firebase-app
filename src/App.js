import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ProtectedRouter } from './components/ProtectedRoute';
import { Register } from './components/Register';
import { AuthProvider } from './context/authContext';

const App = () => {
	return (
		<div className="bg-slate-300 h-screen text-black flex">
			<AuthProvider>
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRouter>
								<Home />
							</ProtectedRouter>
						}
					/>

					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</AuthProvider>
		</div>
	);
};

export default App;
