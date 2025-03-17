import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards.jsx';
import axios from 'axios'
import API_BASE_URL from '../config.js'

const Freebook = () => {

  const [book,setbook]=useState([]);
useEffect(()=>{
  const getBook=async()=>{
    try {
      const res=await axios.get(`${API_BASE_URL}/book`);
      console.log(res.data.filter((data)=>data.category==="Free"));
      setbook(res.data)
    } catch (error) {
      console.log("Error:",error)
    }
  }
  getBook();
},[]);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (<>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
    <div>
    <h1 className="font-semibold text-xl pb-2">Free courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, ratione optio. Nam temporibus corrupti accusamus quasi ipsum deserunt dolore itaque maxime, impedit, odit fugiat facilis ab dolorem laudantium soluta doloremque.</p>
    </div>
  <div>
  <Slider {...settings}>
          {book.map((item)=>(<Cards item={item} key={item.id}/>))}
      </Slider>
  </div>
  </div>
  </>
  )
}

export default Freebook