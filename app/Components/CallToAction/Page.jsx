import Image from 'next/image'
import React from 'react'

const CallToAction = () => {
  return (
    <main className="relative bg-[#041402] lg:px-48 mt-10">
        <div className="absolute top-0 right-0 z-0">
        <Image src="/mask.png" width={720} height={720} alt="Mask Group" />
        </div>
        <div className="flex lg:flex-row flex-col justify-between items-center">
            <div>
                <h1 className="lg:text-[40px] font-semibold text-[#ffffff] lg:text-start text-center lg:mt-0 mt-5">Begin Smart Money <br className="md:block hidden"/> Management</h1>
                <p className="text-[#F3F3F3] text-[16px] lg:mt-5 mt-2 lg:text-start text-center">Download our app now and begin to explore ways to achieve <br /> your financial goals.</p>
                <div className="flex gap-5 items-center lg:justify-normal justify-center mt-7">
                    <Image src="/google.png" width={120} height={120}/>
                    <Image src="/apple.png" width={110} height={110}/>
                </div>
            </div>
            <div className="z-10 lg:-mr-10 lg:mt-0 mt-5 mr-10">
                <Image src="/phone.png" width={750} height={750}/>
            </div>
        </div>
    </main>
  )
}

export default CallToAction