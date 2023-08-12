import React from 'react'
import styles from './style'
import { Hero, Navbar } from './components'
import { BgLeaf } from './assets'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import { menuConst as menuConst } from './constants'


const App = () => (
    <BrowserRouter>


        <div className={'flex-1 flex flex-col items-center bg-cover bg-center bg-no-repeat h-screen w-screen fixed'} style={{ backgroundImage: `url(${BgLeaf})` }}>
            <div className={`${styles.boxWidth} w-full h-full overflow-auto`}>
                <Routes>
                    <Route path="/" element={
                        <Hero />
                    } />
                    <Route path={`/${menuConst.food.id}`} element={
                        <Menu menu={menuConst.food} />
                    } />
                    <Route path={`${menuConst.cocktails.id}`} element={
                        <Menu menu={menuConst.cocktails} />
                    } />
                    <Route path={`${menuConst.faq.id}`} element={
                        <Menu menu={menuConst.faq} />
                    } />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>



    </ BrowserRouter>
)


export default App