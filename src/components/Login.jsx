import React, { useState } from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { login } = useAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      navigate('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="youremail@company.ltd"
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="******"
        />
        <button>Login</button>
      </form>
    </div>
  )
}
