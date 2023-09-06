import { useState, ChangeEvent, FormEvent } from 'react'

import { Button } from '../../components/Button'

export function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setEmail('')
    setPassword('')
  }

  function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value)
  }

  return (
    <div className="form-auth">
      <form className="form" onSubmit={handleSubmit}>
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
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}
