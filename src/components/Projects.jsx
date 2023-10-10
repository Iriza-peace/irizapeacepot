import React from 'react'
import Project1 from '../assets/cover.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'
function projects() {
    return (
        <>
        <div className="flex items-center justify-center ">
  <a
    href="#"
    className="flex flex-col items-center bg-white border border-none rounded-lg shadow-xl md:flex-row md:max-w-3xl md:h-96 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      className="object-cover h-64 md:w-72 md:h-full md:rounded-none md:rounded-l-lg"
      src={Project1}
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal ">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        FOOD HUB
       
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      AI-powered food waste reduction design to optimize supply chains and help consumers
       make more informed choices. Worked as a ux and ui designer
      </p>
      <p className='mt-6 '>
      <a href="https://www.behance.net/gallery/180209235/FOOD-HUB" class="text-white hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-bold rounded-full text-md p-4 mr-4 mb-2 ">VIEW PROJECTS</a>
      </p>
    </div>
  </a>
</div>


{/* //the second card  */}

<div className="flex items-center justify-center ">
<a
  href="#"
  className="flex flex-col items-center bg-white border border-none rounded-lg shadow-xl md:flex-row md:max-w-3xl md:h-96 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
>
  <img
    className="object-cover h-64 md:w-72 md:h-full md:rounded-none md:rounded-l-lg"
    src={Project2}
    alt=""
  />
  <div className="flex flex-col justify-between p-4 leading-normal ">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      CORRASET
     
    </h5>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
    Corasset is a powerful driven agency that builds your home, apartment from zero to hero.
    I worked as a full process ux and ui designer
    </p>
    <p className='mt-6 '>
    <a href="https://www.behance.net/gallery/159442947/corasset" class="text-white hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-bold rounded-full text-md p-4 mr-4 mb-2 ">VIEW PROJECTS</a>
    </p>
  </div>
</a>
</div>
{/* 
//the third card */}
<div className="flex items-center justify-center ">
  <a
    href="#"
    className="flex flex-col items-center bg-white border border-none rounded-lg shadow-xl md:flex-row md:max-w-3xl md:h-96 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
  >
    <img
      className="object-cover h-64 md:w-72 md:h-full md:rounded-none md:rounded-l-lg"
      src={Project3}
      alt=""
    />
    <div className="flex flex-col justify-between p-4 leading-normal ">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        TENZI
       
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.
      </p>
      <p className='mt-6 '>
      <a href="https://www.behance.net/gallery/156176601/TENZI-a-question-answer-mobile-application" class="text-white hover:bg-yellow-400 hover:text-white ring-2 ring-yellow-400 font-bold rounded-full text-md p-4 mr-4 mb-2 ">VIEW PROJECTS</a>
      </p>
    </div>
  </a>
</div>
</>


    )
}

export default projects