import React from 'react'

function Home() {
  return (
    <div>
        <div className='fixed px-10 py-10 justify-between flex top-0 left-0'>
            <header >
                <a href="/" className='m-5'>Home</a>
                <a href="/Login" className='m-5'>Login</a>
                <a href="/Signup" className='m-5'>SignUp</a>
            </header>
        </div >
        <div className='text-center py-30'>
            <h2>Welcome to the Home Page</h2>
            <p>This is a protected page accessible after login.</p>
        </div>
        </div>
  )
}

export default Home