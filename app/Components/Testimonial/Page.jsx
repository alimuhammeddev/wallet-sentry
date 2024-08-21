import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <main className="bg-[#F6FFF8] lg:mt-20 mt-10 lg:p-10 p-7">
        <div>
            <h1 className="text-[#222222] lg:text-[40px] text-[25px] font-semibold text-center">What Our Customers Say</h1>
            <p className="text-[18px] text-center text-[#8D8A8A]">Discover how our users' financial lives have been transformed. Hear their stories and success with <br className="md:block hidden"/> 
            our budgeting app.</p>
        </div>

        <div className="mx-auto lg:flex lg:flex-row flex-col justify-center mt-10">
            <div className="lg:flex items-center bg-[#ffffff] lg:w-[670px] w-[300px]">
                <div>
                    <Image src="/customer1.png" width={300} height={300} alt="Customer1 Image"/>
                </div>
                <div className="lg:p-10 p-3 border-2 border-[#C5E1C4] lg:-ml-6">
                    <h1 className="text-[#6F6F6F] text-[16px]">I'm terrible with money, but Wallet <br /> Sentry turned things around for me. <br /> The visual reports are fantastic, and <br /> I'm finally on track to pay off my <br /> student loans! I would definitely <br /> recommend this app.</h1>
                    <div className="mt-7">
                        <h1 className="text-[20px] font-semibold text-[#222222]">OLAMIDE ODINAKA</h1>
                        <p className="text-[#8D8A8A] text-[16px]">Student at Univerity of Ibadan</p>
                        <Image src="/star.png" width={100} height={100} alt="Star Image"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Testimonial