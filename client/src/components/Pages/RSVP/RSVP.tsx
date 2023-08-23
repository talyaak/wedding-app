import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './Login';


const RSVP = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col items-center justify-start px-6 py-2 lg:px-8">
                <div className="self-center text-center">
                    <h2 className="font-reborn font-medium xs:hidden ss:block ss:text-[38px] sm:text-[45px] md:text-[65px] md:py-10">
                        Répondez s'il vous plaît
                    </h2>
                    <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden">
                        Répondez
                    </h2>
                    <h2 className="font-reborn font-medium xs:block text-[38px] ss:hidden mb-5">
                        s'il vous plaît
                    </h2>


                </div>

                <Outlet />

            </div>
        </>
    )
}

export default RSVP;