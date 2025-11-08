import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Create account</h1>
      <button>Continue with github</button>
      <h3>or wih Email</h3>
      <form>       
        <input type='email'/>
        <input type='password'/>
        <button>Sign up</button>
      </form>
      <Link href='/sign-in'><p>Already have an account? sign in</p></Link>
    </div>
  )
}

export default page
