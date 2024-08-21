import React from 'react'

const Join = () => {
  return (
    <main className="bg-[#F6FFF8] lg:mt-20 mt-10 pb-10 lg:p-0 p-3">
        <div><br /><br />
            <h1 className="lg:text-[40px] text-[30px] font-semibold text-[#222222] text-center">Join Our Community</h1>
            <p className="text-[#8D8A8A] text-[18px] text-center">Subscribe to our newsletter and receive the latest tips and financial news delivered <br className="lg:block hidden"/> straight to your inbox</p>
        </div>
        <div className="p-8 md:p-12 lg:px-5 lg:py-5">
            <div className="mx-auto lg:mt-8 max-w-xl">
                <form action="#" className="sm:flex sm:gap-4">
                    <div className="sm:flex-1">
                    <label htmlFor="email" className="sr-only">Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#222222]"
                    />
                    </div>

                    <button
                    type="submit"
                    className="group mt-4 flex w-full p-2 items-center justify-center gap-2 rounded-md bg-[#167E27] px-8 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                    >
                    <span className="text-sm font-medium"> subscribe </span>

                    </button>
                </form>
            </div>
        </div>
    </main>
  )
}

export default Join