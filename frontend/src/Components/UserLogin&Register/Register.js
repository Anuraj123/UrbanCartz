import React from 'react'

const Register = () => {
  return (
    <>
    <div className=' '>
        <h1>Sign Up</h1>
        <form>
            <div className='flex flex-row'>

<input placeholder='First Name' ></input>
<input placeholder='Last Name'></input>
            </div>
            <div className='flex flex-col'>

<input placeholder='Email'></input>
<input placeholder='Password'></input>
<input placeholder='Confirm Password'></input>
            </div>

        </form>
    </div>
    </>
  )
}

export default Register
