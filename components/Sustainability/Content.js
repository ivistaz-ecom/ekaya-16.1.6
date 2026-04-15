import React from 'react'
import Image from 'next/image'

function Content() {
    return (
      <>
    <div className='mt-[100px] w-[80%] mx-auto' data-aos='fade-down'>
          <h2 className='lg:text-5xl text-3xl sm:text-4xl text-e-green font-light poppins-light pb-6'>Embracing Sustainability:</h2>
          <h2 className='lg:text-5xl text-3xl text-black font-light pb-12 leading-[1.3em] poppins-light'>Our Company’s Environmental<br/> Commitment</h2>
          <p className='poppins-light text-[18px] text-start pb-5'>At our company, we take sustainability seriously. We understand the importance of minimizing our ecological footprint while maximizing positive impacts on the environment. From rainwater harvesting systems to preserving local ecosystems, we’re dedicated to creating a future where business and nature coexist harmoniously.</p>
            </div>


<div className='w-[80%] mx-auto z-50'>  
<div class="flex flex-col lg:flex-row items-center bg-white  lg:w-[90%]" data-aos='fade-right'>
    <Image class="object-cover lg:w-[25em] lg:mr-10"  src="/sustainability/1.webp" alt="ekaya-spaces"  width={800} height={500}/>
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white">Rainwater Harvesting: Nurturing Nature’s Resources</h5>
        <p class="mb-3 poppins-light text-[18px] text-start pb-5">Water conservation is a priority for us. That’s why we’ve implemented rainwater harvesting systems across our facilities. By capturing rainwater runoff, we reduce reliance on traditional water sources and support local ecosystems.</p>
    </div>
                </div>
                
                <div class="flex flex-col-reverse lg:flex-row items-center bg-white  lg:w-[90%] justify-items-end" data-aos='fade-left'>
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white lg:ml-36">Preserving Ecological Balance: Minimizing Impact, Maximizing Harmony</h5>
        <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">We prioritize minimizing damage to local ecology in all our endeavors. Whether constructing new facilities or expanding existing ones, we conduct thorough environmental impact assessments to identify and mitigate potential risks to nearby ecosystems.</p>
                    </div>
                    <Image class="object-cover lg:w-[25em] lg:ml-10"  src="/sustainability/2.webp" alt="ekaya-spaces"  width={800} height={500}/>
                </div>



<div class="flex flex-col lg:flex-row items-center bg-white  lg:w-[90%]" data-aos='fade-right'>
    <Image class="object-cover lg:w-[25em] lg:mr-10"  src="/sustainability/3.webp" alt="ekaya-spaces"  width={800} height={500}/>
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white">Championing Reforestation: Cultivating a Greener Tomorrow</h5>
        <p class="mb-3 poppins-light text-[18px] text-start pb-5">We recognize the crucial role trees play in mitigating climate change. That’s why we’re committed to proactive reforestation efforts in regions affected by deforestation or degradation. Through partnerships with local communities and environmental organizations, we plant and nurture native tree species, restoring habitats and promoting ecological resilience.</p>
    </div>
                </div>        
                


                <div class="flex flex-col-reverse lg:flex-row items-center bg-white  lg:w-[90%] justify-items-end" data-aos='fade-left'>
                    <div class="flex flex-col justify-between leading-normal">
                    <h5 class="mb-2 text-2xl poppins-medium tracking-tight text-gray-900 dark:text-white lg:ml-36">Harnessing Solar Power: Sustainable Energy Solutions</h5>
        <p class="mb-3 poppins-light text-[18px] text-start pb-5 lg:ml-36">To reduce our reliance on fossil fuels, we utilize solar power through installations like rooftop panels and solar farms. By embracing solar energy, we lower our carbon emissions and contribute to a cleaner, more sustainable future.</p>
                    </div>
                    <Image class="object-cover lg:w-[25em] lg:ml-10"  src="/sustainability/4.webp" alt="ekaya-spaces"  width={800} height={500}/>
                </div>
                
 



</div>        
        
        

            

            

            <div className="z-1 -mt-20  bg-white bg-blend-multiply lg:h-screen h-[20em] relative" data-aos='fade-up'>                
            <Image
        src="/sustainability/banner.webp"
        alt="Banner"
        width={1000} // Adjust width and height according to your image dimensions
        height={500}
        className='w-full h-full'
        priority // Preload the image
      />
</div>

            </>
  )
}

export default Content
