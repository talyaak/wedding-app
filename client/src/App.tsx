import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Hero, Navbar, Menu, InfoPage, Login, RSVP, AttendanceMenu } from './components'
import { BgLeaf } from './assets'
import { infoConst, menuConst as menuConst } from './constants'
import { useEffect } from 'react';
import styles from './style'
import Goodbye from './components/Pages/Goodbye'
import { AuthProvider, useAuth } from './components/Common/AuthContext'
import axios from 'axios';
import ProtectedRoute from './components/Common/ProtectedRoute';


const App = () => {
    const { logout } = useAuth();

    // Add an interceptor to handle 401 responses
    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    logout(); // Logout the user
                    // You can also show a notification to inform the user
                    window.alert("You have been logged out.");
                }
                return Promise.reject(error);
            }
        );

        // Cleanup the interceptor when the component unmounts
        return () => {
            axios.interceptors.response.eject(interceptor);
        };
    }, [logout]);
    return (


        <div className={'flex-1 flex flex-col items-center bg-cover bg-center bg-no-repeat h-screen w-screen fixed'} style={{ backgroundImage: `url(${BgLeaf})` }}>
            <Navbar></Navbar>
            <div className={`${styles.boxWidth} w-full h-full overflow-auto`}>
                <Routes>
                    <Route path="/" element={
                        <Hero />
                    } />
                    <Route path={`${menuConst.food.id}`} element={
                        <Menu menu={menuConst.food} />
                    } />
                    <Route path={`${menuConst.cocktails.id}`} element={
                        <Menu menu={menuConst.cocktails} />
                    } />
                    <Route path={`${menuConst.faq.id}`} element={
                        <Menu menu={menuConst.faq} />
                    } />
                    <Route path={`${infoConst.schedule.id}`} element={
                        <InfoPage info={infoConst.schedule} />
                    } />
                    <Route path={`${infoConst.location.id}`} element={
                        <InfoPage info={infoConst.location} />
                    } />
                    <Route path='rsvp' element={<RSVP />}>
                        <Route path='' element={<Login />} />
                        <Route path='*' element={<Login />} />
                    </Route>
                    <Route path='rsvp/attendance' element={<ProtectedRoute element={<AttendanceMenu />} />} />
                    <Route path='goodbye' element={<Goodbye />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>





    )
}


export default App