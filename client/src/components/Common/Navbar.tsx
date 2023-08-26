import { useState } from 'react'
import { close, menu } from '../../assets'
import { ButtonProps, navLinks } from '../../constants'
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const customNavLink: ButtonProps[] = [
        { id: "", title: "Home" },
        ...navLinks
    ]
    const isOnHomePage = useLocation().pathname === "/";
    const isShouldHideNavbar = isOnHomePage ? "hidden" : "";
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className={`w-full flex py-6 justify-between items-center navbar ${isShouldHideNavbar}`}>
            {/* <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' /> */}

            <ul className="list-none md:flex hidden justify-center items-center flex-1">
                {customNavLink.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-reborn
                        font-normal
                        cursor-pointer
                        text-[16px] 
                        mr-10
                    `}
                    >
                        {/* <a href={`#${nav.id}`}>
                            {nav.title}
                        </a> */}
                        <Link to={nav.id}>{nav.title}</Link>
                    </li>
                ))}
                {isAuthenticated() && user?.admin ?
                    <li
                        className={`font-reborn
                        font-normal
                        cursor-pointer
                        text-[16px] 
                        mr-10`}
                    >
                        <Link to={'/admin'}>Admin</Link>
                    </li>
                    : <></>}
                {isAuthenticated() ?
                    <li
                        className={`font-reborn
                        font-normal
                        cursor-pointer
                        text-[16px] 
                        mr-10`}
                        onClick={() => logout()}
                    >
                        Log out
                    </li>
                    : <></>}

            </ul>

            <div className="md:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain mr-2'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
                    absolute top-20 right-0 mx-4 my-2 min-w[140px] rounded-xl sidebar`}
                >
                    <ul className="list-none flex-col justify-end items-center flex-1">
                        {customNavLink.map((nav) => (
                            <li
                                key={nav.id}
                                className={`font-reborn
                        font-normal
                        cursor-pointer
                        text-[16px] 
                        mb-4
                        text-white
                    `}
                            >
                                <Link to={nav.id} onClick={() => setToggle((prev) => !prev)}>{nav.title}</Link>
                            </li>
                        ))}
                        {isAuthenticated() && user?.admin ?
                            <li
                                className={`font-reborn
                        font-normal
                        cursor-pointer
                        text-[16px] 
                        mb-4
                        text-white`}
                            >
                                <Link to={'/admin'}>Admin</Link>
                            </li>
                            : <></>}
                        {isAuthenticated() ?
                            <li
                                className={`font-reborn
                                font-normal
                                cursor-pointer
                                text-[16px] 
                                mb-4
                                text-white`}
                                onClick={() => logout()}
                            >
                                Log out
                            </li>
                            : <></>}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar