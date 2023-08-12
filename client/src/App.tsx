import React from 'react'
import styles from './style'
import { Hero, Navbar } from './components'
import { BgLeaf } from './assets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Food from './components/Food'


const App = () => (
    <BrowserRouter>


        <div className={'flex-1 flex flex-col items-center bg-cover bg-center bg-no-repeat h-screen w-screen fixed'} style={{ backgroundImage: `url(${BgLeaf})` }}>
            <div className={`${styles.boxWidth} w-full h-full overflow-auto`}>
                <Routes>
                    <Route path="/" element={
                        <Hero />
                    } />
                    <Route path="/food" element={
                        <Food />
                    } />
                </Routes>
            </div>
        </div>



    </ BrowserRouter>
)


export default App