'use client'
import React, { useEffect} from 'react'
import AOS from "aos";
import Image from 'next/image'


const blogs = [
    
    {
        'id': '1',
        'icon': '/icon-1.svg',
        'title': 'Local Sourcing: Building Stronger Communities',
        'desc': 'By sourcing materials locally, we reduce the need for long-distance transportation, thereby cutting down on carbon emissions associated with shipping. This approach aligns with our commitment to environmental responsibility by minimizing our carbon footprint.'
    },

    {
        'id': '2',
        'icon': '/icon-2.svg',
        'title': 'Supporting Local Economies: Investing in Communities',
        'desc': 'Procuring materials locally isn’t just about environmental benefits; it’s also about supporting local economies. By sourcing from nearby suppliers and businesses, we contribute to economic growth and job creation in the communities where we operate. This approach helps build stronger, more resilient local economies.'
    },

    {
        'id': '3',
        'icon': '/icon-3.svg',
        'title': 'Quality Assurance and Collaboration: Working Hand in Hand',
        'desc': 'Sourcing materials locally allows us to build strong relationships with suppliers, ensuring the quality and reliability of the materials we use in our projects. By collaborating closely with local partners, we can better understand their practices and standards, leading to improved transparency and accountability throughout the supply chain.'
    },
    {
        'id': '4',
        'icon': '/icon-4.svg',
        'title': 'Empowering Communities: Driving Positive Change Together',
        'desc': 'Our commitment to local sourcing extends beyond economic benefits; it’s also about empowering communities. By investing in local businesses and suppliers, we help create opportunities for growth and development. Additionally, by engaging with local stakeholders, we ensure that our projects are aligned with community needs and priorities.'
    },
]





function ApproachContent() {

    useEffect(() => {
        AOS.init({
          // Initialize AOS with your desired configuration options
          //   duration: 800, // Duration of the animation
          //   easing: "ease-in-out", // Easing option
          once: false // Whether animation should only happen once
        });
      }, []);



  return (
    <div className='grid grid-cols-3 py-12 w-[80%] mx-auto' data-aos='fade-up'>
          {
              blogs.map((items,index) => (
                <div class="p-6 bg-white border border-gray-200  dark:bg-gray-800 dark:border-gray-700">
                      <Image src={items.icon} className="py-6" width={100} height={100} alt="ekaya-spaces" />
                          <h5 class="mb-2 h-[100px] text-2xl poppins-light tracking-tight text-gray-900 dark:text-white">{items.title}</h5>
                      <p class="mb-3 poppins-light text-[18px] text-gray-500 dark:text-gray-400">{items.desc}</p>

</div>  
                  
            ))

}


          

    </div>
  )
}

export default ApproachContent
