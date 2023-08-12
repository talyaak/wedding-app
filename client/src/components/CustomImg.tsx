import React from 'react';

interface CustomImgProps {
    path: string;
    folderType: string;
}

const CustomImg: React.FC<CustomImgProps> = (props) => {
    const maxHeight = props.folderType === 'food' ? 36 : 40;
    return (
        <img
            className={`max-h-${maxHeight} py-4`}
            src={`/src/assets/${props.folderType}/${props.path}.png`}
            alt={props.path} />
    )
}

export default CustomImg;