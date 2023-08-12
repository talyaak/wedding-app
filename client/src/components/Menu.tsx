import React from 'react'
import styles from '../style'
// import { foodImgs } from '../constants'
import { food_0 } from '../assets'
import CustomImg from './CustomImg'
import { MenuInterface } from '../constants'

interface CustomMenuProps {
    menu: MenuInterface
}

const Menu: React.FC<CustomMenuProps> = (props) => {
    return (
        <div className={`flex flex-col justify-start items-center h-fit`}>
            <div className='font-reborn font-medium xs:text-[40px] ss:text-[60px] sm:text-[70px] mt-20'>{`${props.menu.title} Menu`}</div>
            <div className='flex xs:flex-col-reverse xs:px-10 lg:px-2 lg:flex-row items-center justify-around py-10 w-full'>
                <div>
                    {props.menu.imgArr.slice(3).map(obj => (
                        <CustomImg key={obj} folderType={props.menu.id} path={obj} />
                    ))}
                </div>
                <div>
                    {props.menu.imgArr.slice(0, 3).map(obj => (
                        <CustomImg key={obj} folderType={props.menu.id} path={obj} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Menu