import React from 'react';

interface CustomImgProps {
    path: string;
}

const CustomImg: React.FC<CustomImgProps> = (props) => {
    return (
        <img
            className={`max-h-40 py-4`}
            src={`/src/assets/food/${props.path}.png`}
            alt={props.path} />
    )
}

export default CustomImg;