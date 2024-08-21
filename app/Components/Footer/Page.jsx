import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main>
        <div className="bg-[#22371b] p-5">
            <div className="mt-3 lg:px-40 lg:flex items-center lg:justify-between">
                <div className="lg:flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <Image src="/email.png" width={30} height={30}/>
                        <h1 className="text-[#E4E4E4] text-[16px]">sentrysipport@yahoo.com</h1>
                    </div>
                    <div className="flex items-center lg:mt-0 mt-5 gap-2">
                        <Image src="/call.png" width={30} height={30}/>
                        <h1 className="text-[#E4E4E4] text-[16px]">+234 9087654362</h1>
                    </div>
                </div>
                <div className="flex items-center lg:mt-0 mt-5 gap-5">
                    <Image src="/linkedin.png" width={30} height={30}/>
                    <Image src="/facebook.png" width={30} height={30}/>
                    <Image src="/twitter.png" width={30} height={30}/>
                    <Image src="/instagram.png" width={30} height={30}/>
                </div>
            </div>
        </div>


        <div className="bg-[#0A2102] p-5 pb-8">
            <div className="lg:px-40 lg:flex items-center lg:justify-between mt-5">
                <div className="lg:space-x-10 space-x-5 lg:pl-0 pl-6 ">
                    <a href="#!" className="text-[16px] text-[#ffffff] font-medium">HOME</a>
                    <a href="#!" className="text-[16px] text-[#ffffff] font-medium">SERVICES</a>
                    <a href="#!" className="text-[16px] text-[#ffffff] font-medium">ABOUT</a>
                    <a href="#!" className="text-[16px] text-[#ffffff] font-medium">TERMS & CONDITION</a>
                    <a href="#!" className="text-[16px] text-[#ffffff] font-medium">PRIVACY POLICY</a>
                </div>
                <div className="flex items-center lg:justify-normal justify-center gap-2 lg:mt-0 mt-4">
                    <Image src="/copy.png" width={15} height={15}/>
                    <h1 className="text-[#B8BABD] text-[16px]">2023 Wallet Sentry</h1>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Footer