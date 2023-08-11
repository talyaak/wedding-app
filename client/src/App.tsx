import React from 'react'
import styles from './style'
import { Billing, Business, CTA, CardDeal, Clients, Footer, Hero, Navbar, Stats, Testimonials } from './components'
import { BgLeaf } from './assets'


const App = () => (
    <>
        <div className={`bg-cover bg-center bg-no-repeat h-screen`} style={{ backgroundImage: `url(${BgLeaf})` }}>
            <div className={'flex-1 flex flex-col items-center'}>
                <div className={`${styles.boxWidth} md:fixed  w-full h-full`}>
                    <Hero />
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                </div>
            </div>
        </div>

    </>
)


export default App