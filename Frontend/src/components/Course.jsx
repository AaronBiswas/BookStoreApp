import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-black dark:text-white">
        <div className="mt-28 flex flex-col items-center text-center ">
        <h1 className="text-2xl md:text-4xl">Here are the <span className="text-pink-500">full collection of books :)</span> </h1>
        <p className="mt-12"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum magni rerum totam debitis earum nemo in voluptates, nostrum, error sed eaque mollitia. Nulla vitae vero perferendis magnam, odio deserunt et.</p>
        <Link to="/">
        <button className="mt-6 bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-200">Back</button>
        </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                list.map((item)=><Cards item={item} key={item.id} />)
            }
        </div>
    </div>
    </>
  )
}

export default Course