import React from 'react'
import styles from './style'
import { Hero, Navbar } from './components'
import { BgLeaf } from './assets'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => (
    <BrowserRouter>

        <div className={`bg-cover bg-center bg-no-repeat h-screen`} style={{ backgroundImage: `url(${BgLeaf})` }}>
            <Routes>
                <Route path="/" element={
                    <div className={'flex-1 flex flex-col items-center'}>
                        <div className={`${styles.boxWidth} md:fixed  w-full h-full`}>
                            <Hero />
                        </div>
                    </div>
                } />
            </Routes>
        </div>


    </ BrowserRouter>
)


export default App