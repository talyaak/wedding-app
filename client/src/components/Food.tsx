import React from 'react'
import styles from '../style'
import { foodImgs } from '../constants'
import { food_0 } from '../assets'
import CustomImg from './CustomImg'

const Food = () => {
    return (
        <div className={`flex flex-col justify-start items-center h-fit`}>
            <div className='font-reborn font-medium xs:text-[50px] ss:text-[70px] mt-20'>Food Menu</div>
            <div className='flex xs:flex-col-reverse xs:px-10 lg:px-2 lg:flex-row items-center justify-around py-10 w-full'>
                <div>
                    {foodImgs.slice(3).map(food => (
                        <CustomImg key={food} path={food} />
                    ))}
                </div>
                <div>
                    {foodImgs.slice(0, 3).map(food => (
                        <CustomImg key={food} path={food} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Food