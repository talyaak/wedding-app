import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../constants';
import styles from '../style';

const NavButton: React.FC<ButtonProps> = ({ title, id }) => {
    return (
        <div className={`${styles.button}`}>
            <Link to={id} className='block'>
                {title}
            </Link>
        </div>
    )
}

export default NavButton