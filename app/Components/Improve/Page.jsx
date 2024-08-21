import Image from 'next/image'
import React from 'react'

const Improve = () => {
  return (
    <main className="lg:px-52 lg:mt-24 p-3">
        <div className="flex lg:flex-row flex-col lg:gap-28 gap-5">
            <div>
                <Image src="/logo2.png" width={500} height={500} alt="Logo2 Image"/>
            </div>
            <div>
                <h1 className="lg:text-[40px] text-[25px] font-semibold text-[#222222]">Improve Your Financial <br /> Performance</h1>
                <p className="text-[#8D8A8A] text-[16px] leading-loose mt-5">We've created a user-friendly and powerful tool that simplifies <br /> budgeting, tracks expenses, and sets you on a path toward your <br /> financial goals. Whether you're saving for a dream vacation, <br /> working to pay off debt, or simply seeking peace of mind in your <br /> financial journey, we're here to support you every step of the way.</p>
                <p className="text-[#8D8A8A] text-[16px] leading-loose">Our mission is to empower individuals and families to make <br /> informed financial decisions.</p>
                <button className="bg-[#167E27] p-2 px-5 text-[#ffffff] rounded-lg mt-5">
                Get Started
                </button>
            </div>
        </div>
    </main>
  )
}

export default Improve