import React from 'react'
import CustomImg from '../Common/CustomImg'
import { MenuInterface } from '../../constants'

interface CustomMenuProps {
    menu: MenuInterface
}

const Menu: React.FC<CustomMenuProps> = (props) => {
    return (
        <div className='flex flex-col items-center'>
            <div className={`flex flex-col justify-start items-center h-[fit] xl:max-w-[80%]`}>
                <div className='font-reborn font-medium xs:text-[40px] ss:text-[60px] sm:text-[70px] xs:mt-0 ss:mt-5'>{`${props.menu.title}`}</div>
                <div className={`flex xs:flex-col-reverse xs:px-20 lg:px-2 lg:flex-row items-center justify-around xs:py-3 ss:py-8 w-full`}>
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
        </div>
    )
}

export default Menu