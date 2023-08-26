import React from 'react';

interface CustomImgProps {
    path: string;
    folderType: string;
}

const CustomImg: React.FC<CustomImgProps> = (props) => {
    return (
        <img
            className={`max-h-44 py-4`}
            src={`/src/assets/${props.path}.png`}
            alt={props.path} />
    )
}

export default CustomImg;