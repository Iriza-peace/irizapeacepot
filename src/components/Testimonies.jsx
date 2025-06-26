import React from 'react'
import Ceo from '../assets/ceo.jpg'
import Kevine from '../assets/kevine.png'
import Nicole from '../assets/nicole.jpeg'
import Souvenir from '../assets/souvenir.jpeg'

function Testimonies() {
  return (
    <div>
<div class="grid mb-8 border border-gray-200  shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200    dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold dark:text-yellow-400 ">Mindblowing time management</h3>
            <p class="my-4">If you care for your time, I hands down would go with her."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Ceo} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>NIYOMUNGERI Aline</div>
                <div class="text-sm dark:text-yellow-400">UI UX and Graphic Designer at Ministry of Finance and Economic Planning(MINECOFIN)</div>
            </div>
        </figcaption>    
    </figure>


    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-yellow-400">Creativity & Focus on every detail</h3>
            <p class="my-4">"IRIZA Peace is a highly motivated and creative UI/UX designer with a keen eye for detail. She is a quick learner and always eager to take on new challenges.""</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-12 h-16" src={Kevine} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>ISHIMWE Kevine</div>
                <div class="text-sm dark:text-yellow-400">UX UI Designer at Ministry of Foreign Affairs(MINAFFET)</div>
            </div>
        </figcaption>    
    </figure>



    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold dark:text-yellow-400">Mindblowing design</h3>
            <p class="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Nicole} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>UMUKUNDWA Ange Nicole</div>
                <div class="text-sm dark:text-yellow-400">UI, UX Designer at PivotAccess ltd</div>
            </div>
        </figcaption>    
    </figure>


    
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold dark:text-yellow-400">Strong design foundation</h3>
            <p class="my-4">She is a talented UI/UX designer with a strong understanding of user experience principles.She is able to create designs that are both visually appealing and easy to use.""</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Souvenir} alt="profile picture"/>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>TURINUMUGISHA Souvenir</div>
                <div class="text-sm dark:text-yellow-400">Senior frontend developer at Erdener Lab</div>
            </div>
        </figcaption>    
    </figure>
</div>
    </div>
  )
}

export default Testimonies