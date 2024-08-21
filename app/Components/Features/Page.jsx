import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <main className="lg:mt-20 mt-10 p-3">
        <div>
            <h1 className="lg:text-[40px] text-[25px] font-semibold text-center">Our Key Features</h1>
            <p className="text-[#8D8A8A] text-[16px] leading-relaxed mt-2 text-center">Simplifying budgeting and putting you in control of your finances. See how our tools make money <br className="md:block hidden"/> management effortless</p>
        </div>

        <div className="flex items-center lg:flex-row flex-col gap-10 lg:px-52 mt-10">
            <div className="bg-[#E8FFE8] lg:w-[350px] lg:h-[440px] p-7 rounded-2xl">
                <h1 className="text-[24px] font-medium">Income & Expense <br /> 
                Tracking</h1>
                <p className="text-[#8D8A8A] text-[16px] leading-relaxed mt-5">Record and categorize daily <br />
                expenses, and log sources of income. </p>
                <div className="flex justify-center mt-7">
                    <Image src="/income.png" width={200} height={200} alt="Income Image"/>
                </div>
            </div>
            <div className="bg-[#DFFFF4] lg:w-[350px] lg:h-[440px] p-7 rounded-2xl">
                <h1 className="text-[24px] font-medium">Budget Creation</h1>
                <p className="text-[#8D8A8A] text-[16px] leading-relaxed mt-5">Set up monthly or customized <br /> budgets for various spending <br /> categories to help you stay on track.</p>
                <div className="flex justify-center mt-7">
                    <Image src="/budget.png" width={200} height={200} alt="Budget Image"/>
                </div>
            </div>
            <div className="bg-[#E8FFE8] lg:w-[350px] lg:h-[440px] p-7 rounded-2xl">
                <h1 className="text-[24px] font-medium">Debt Management</h1>
                <p className="text-[#8D8A8A] text-[16px] leading-relaxed mt-5">Keep track of outstanding debts and <br /> create repayment plans.</p>
                <div className="flex justify-center mt-28">
                    <Image src="/debt.png" width={200} height={200} alt="Debt Image"/>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Features