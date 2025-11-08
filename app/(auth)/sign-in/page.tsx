import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <button>Continue with github</button>
      <h3>or wih Email</h3>
      <form>       
        <input type='email'/>
        <input type='password'/>
        <button>Sign in</button>
      </form>
      <Link href='/sign-up'><p>Don't have an account? sign up</p></Link>
    </div>
  )
}

export default page
