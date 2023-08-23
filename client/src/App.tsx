import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Hero, Navbar, Menu, InfoPage, Login, RSVP, AttendanceMenu } from './components'
import { BgLeaf } from './assets'
import { infoConst, menuConst as menuConst } from './constants'
import styles from './style'
import Goodbye from './components/Pages/Goodbye'


const App = () => (
    <BrowserRouter>


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
                    <Route path='rsvp/attendance' element={<AttendanceMenu />} />
                    <Route path='goodbye' element={<Goodbye />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>



    </ BrowserRouter>
)


export default App