import React from 'react'

const Goodbye = () => {
    return (
        <div className="flex min-h-full flex-1 flex-col items-center justify-start px-6 py-2 lg:px-8">
            <div className="self-center text-center">
                <h2 className="font-reborn font-medium xs:hidden ss:block ss:text-[38px] sm:text-[45px] md:text-[65px] md:py-10">
                    Thank you!
                </h2>
                <h1 className=" font-baloo text-center text-[20px] my-2 md:mb-14 text-black w-full tracking-widest">
                    {`We received your answer :)`}
                </h1>

            </div>

        </div>
    )
}

export default Goodbye