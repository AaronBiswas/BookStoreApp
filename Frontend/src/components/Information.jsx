import React from 'react'

const Information = () => {
  return (
    <>
    <div className="dark:bg-black dark:text-white">
    <div className="dark:bg-black dark:text-white hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome to My Bookstore Project</h1>
      <p className="mt-12 text-2xl font-bold">
      This is a sample project showcasing my skills in MERN Full Stack development. If you find it interesting,<span className="text-pink-500"> check out my GitHub profile by clicking the button below.</span>
      </p>
      <button className="mt-12 btn btn-primary hover:bg-purple-500" onClick={() => window.location.href = 'https://github.com/AaronBiswas'}>My Profile</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Information