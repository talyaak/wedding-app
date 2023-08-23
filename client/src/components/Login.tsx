import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const isPhoneNumberValid = /^05\d([-]{0,1})\d{7}$/.test(phoneNumber); // Israeli mobile number regex
    const isFormValid = isPhoneNumberValid && password !== '';

    const handleSignIn = (event: React.FormEvent) => {
        event.preventDefault();
        if (isFormValid) {
            // Perform your authentication logic here

            // If authentication is successful, navigate to the destination route
            navigate('attendance');
        }
    };
    return (
        <div className='flex flex-row justify-center bg-[#F1EBE5]/75 border-2 border-[#000000]/25 h-[320px] xs:w-[90%] sm:w-[50%] lg:w-[30%] rounded-sm md:my-0 my-2'>
            <div className="mt-10 w-[80%]">
                <form className="space-y-6" onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Phone Number <br className='xs:block ss:hidden' /> (If you were invited 😉)
                        </label>
                        <div className="mt-2">
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                required
                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />


                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`flex w-full justify-center rounded-md ${isFormValid
                                ? 'bg-[#F1EBE5]/75 hover:bg-[#F1EBE5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                                : 'bg-gray-300 cursor-not-allowed'
                                } px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm`}
                        >
                            Sign in
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login