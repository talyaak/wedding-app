import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../constants';
import styles from '../style';

const NavButton: React.FC<ButtonProps> = ({ title, id }) => {
    return (
        <Link to={id} className={`${styles.navButton}`}>
            {title}
        </Link>
    )
}

export default NavButton