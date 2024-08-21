import Image from 'next/image'
import React from 'react'

const FAQ = () => {
  return (
    <main className="mt-20">
        <div className="flex lg:flex-row flex-col items-center justify-center gap-28">
            <div className="lg:mt-36">
                <Image src="/search.png" width={300} height={300} alt="Search Image"/>
            </div>
            <div className="p-4 lg:-mt-0 -mt-20">
                <h1 className="lg:text-[40px] text-[20px] text-[#222222] font-semibold">Frequently Asked Questions</h1>
                <div>
                <div className="space-y-4 lg:mt-16 mt-5">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900"
                        >
                        <h2 className="font-medium lg:text-[18px] text-[#222222]">Is my financial data safe?</h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        No
                        </p>
                    </details>

                    <h1 className="border border-[#E4E4E4]"></h1>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mt-8"
                        >
                        <h2 className="font-medium lg:text-[18px] text-[#222222]">Can I link my bank accounts and credit cards?</h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        No
                        </p>
                    </details>

                    <h1 className="border border-[#E4E4E4]"></h1>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mt-8"
                        >
                        <h2 className="font-medium lg:text-[18px] text-[#222222]">Can I customize spending categories in the app?</h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                         No
                        </p>
                    </details>

                    <h1 className="border border-[#E4E4E4]"></h1>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mt-8"
                        >
                        <h2 className="font-medium lg:text-[18px] text-[#222222]">Does Wallet Sentry support multi-currency transactions?</h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        No
                        </p>
                    </details>

                    <h1 className="border border-[#E4E4E4]"></h1>

                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                        className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 mt-8"
                        >
                        <h2 className="font-medium lg:text-[18px] text-[#222222]">Can I view my spending history and generate financial reports?</h2>

                        <svg
                            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                        </summary>

                        <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        No
                        </p>
                    </details>

                    <h1 className="border border-[#E4E4E4]"></h1>

                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default FAQ