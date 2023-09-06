import { useState, ChangeEvent, FormEvent } from 'react'

import { Button } from '../../components/Button'

export function SignUp(): JSX.Element {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setUserName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }
  function handleUserNameChange(e: ChangeEvent<HTMLInputElement>): void {
    setUserName(e.target.value)
  }
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value)
  }
  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value)
  }
  function handleConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    setConfirmPassword(e.target.value)
  }
  return (
    <div className="form-auth">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={handleUserNameChange}
            value={userName} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword} />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}