import React from 'react'

const Goodbye = () => {

    return (
        <div className="flex min-h-full flex-1 flex-col items-center justify-start px-6 py-2 lg:px-8">
            <div className="self-center text-center">
                <h2 className="font-reborn font-medium ss:block xs:text-[50px] ss:text-[65px] sm:text-[75px] md:text-[85px] md:py-10">
                    Thank You!
                </h2>
                <h1 className=" font-baloo text-center text-[20px] my-2 mb-14 text-black w-full tracking-widest">
                    {`We received your answer :)`}
                </h1>
                <h1 className=" font-baloo text-center text-[20px] my-2 mb-14 text-black w-full tracking-widest">
                    {`P.S. Please arrive by 3PM, we'll see you soon!`}<br /> {`Yours truly, Tal & Inbal 🤎`}
                </h1>

            </div>

        </div>
    )
}

export default Goodbye