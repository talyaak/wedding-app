import React from 'react'
import { InfoInterface } from '../constants'

interface CustomInfoProps {
    info: InfoInterface
}

const InfoPage: React.FC<CustomInfoProps> = (props) => {
    return (

        <div className={`flex flex-col xs:justify-start xs:mt-4 md:mt-0 items-center h-screen`}>
            <div className='font-reborn font-medium xs:text-[30px] ss:text-[40px] sm:text-[70px] md:py-10 '>{`${props.info.title}`}</div>
            <img
                className='w-[80%] xs:hidden md:block'
                src={`/src/assets/${props.info.img}_L.png`}
                alt={`${props.info.id}`} />
            <img
                className='max-h-[85%] xs:block xs:mt-10 md:hidden'
                src={`/src/assets/${props.info.img}_P.png`}
                alt={`${props.info.id}`} />
        </div>

    )
}

export default InfoPage